import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, IHttpConnectionOptions, LogLevel } from '@microsoft/signalr';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Message } from '../models/message';

  
@Injectable()  
export class ChatService {  
  messageReceived = new EventEmitter<Message>();  
  connectionEstablished = new EventEmitter<Boolean>();  

  public connectionIsEstablished = false;  
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
    this.httpClient.get(this.negotiateUrl).pipe(tap(async (x: any) => {
      this.handleNegotiate(x);
    })).subscribe();

  }
  async handleNegotiate(response: any) {
    console.log('NotificationHubClient', `Negotiation results: ${JSON.stringify(response)}`);
    const options: IHttpConnectionOptions = {
      // logger: logger,
      accessTokenFactory: () => response.accessToken,
      logMessageContent: true
      //,
    };
    this._hubConnection = this._hubConnection || new HubConnectionBuilder()
    .withUrl(response.url, options)
    .configureLogging(LogLevel.Trace)
    .withAutomaticReconnect()
    .build();    
    this.registerOnServerEvents();  
    this.startConnection(); 
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