import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, IHttpConnectionOptions, LogLevel } from '@microsoft/signalr';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Message } from '../models/message';

  
@Injectable()  
export class ChatService {  
  messageReceived = new EventEmitter<Message>();  
  connectionEstablished = new EventEmitter<Boolean>();  

  private connectionIsEstablished = false;  
  private _hubConnection: HubConnection;  
  
  constructor(private httpClient: HttpClient) { 
    console.log('here')
    this.createConnection();  
  }  
  
  sendMessage(message: Message) {  
    this.httpClient.post(this.talkUrl, message).subscribe()
  } 

  get talkUrl() {
  return environment.hubUrl + 'talk';
  }
  
  get negotiateUrl() {
    return environment.hubUrl + 'negotiate';
    }
  private createConnection() {  
    const headers = new HttpHeaders()
    .append('x-functions-key', `wBwLfcFRDMI+vQtoyhmvKEBsaheX7ssA+nuT32v+IUc=`)
    // .append('x-ms-signalr-userid', signalR_user_id);
    
    this.httpClient.get(this.negotiateUrl,{ headers }).pipe(tap(async (x: any) => {
      console.log('NotificationHubClient', `Negotiation results: ${JSON.stringify(x)}`);
      const options: IHttpConnectionOptions = {
        // logger: logger,
        accessTokenFactory: () => x.accessToken,
        logMessageContent: true
        //,
      };
      this._hubConnection = this._hubConnection || new HubConnectionBuilder()
      .withUrl(x.url, options)
      .configureLogging(LogLevel.Trace)
      .withAutomaticReconnect()
      .build();    

      this.registerOnServerEvents();  
      this.startConnection();  
    })).subscribe();

  }
  
  private startConnection(): void {  
    this._hubConnection  
      .start()  
      .then(() => {  
        this.connectionIsEstablished = true;  
        console.log('Hub connection started');  
        this.connectionEstablished.emit(true);  
      })  
      .catch(err => {  
        console.log('Error while establishing connection, retrying...');  
        setTimeout(function () { this.startConnection(); }, 5000);  
      });  
  }  
  
  private registerOnServerEvents(): void {  
    this._hubConnection.on('newMessage', (data: any) => {  
      console.log({data});
      this.messageReceived.emit(data);  
    });  
  }  
}