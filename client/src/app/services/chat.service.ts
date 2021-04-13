import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, IHttpConnectionOptions, LogLevel } from '@microsoft/signalr';
import { tap } from 'rxjs/operators';
import { Message } from '../models/message';

  
@Injectable()  
export class ChatService {  
  messageReceived = new EventEmitter<Message>();  
  connectionEstablished = new EventEmitter<Boolean>();  
  
  private connectionIsEstablished = false;  
  private _hubConnection: HubConnection;  
  
  constructor(private httpClient: HttpClient) {  
    this.createConnection();  
  }  
  
  sendMessage(message: Message) {  
    this._hubConnection.invoke('NewMessage', message);  
  }  
  
  private createConnection() {  
    const headers = new HttpHeaders()
    .append('x-functions-key', `wBwLfcFRDMI+vQtoyhmvKEBsaheX7ssA+nuT32v+IUc=`)
    // .append('x-ms-signalr-userid', signalR_user_id);
    
  
    console.log('here');
    this.httpClient.get(`http://10.0.0.186:7071/api/negotiate`,{ headers }).pipe(tap(async (x: any) => {
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
    this._hubConnection.on('MessageReceived', (data: any) => {  
      this.messageReceived.emit(data);  
    });  
  }  
}