import { AfterViewChecked, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/models/message';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from '../services/user.service';
import { Guid } from '../utilities/guid';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  title = 'ClientApp';
  txtMessage: string = '';
  uniqueID: string = new Date().getTime().toString();
  messages = new Array<Message>();
  message = new Message();
  constructor(
    public chatService: ChatService,
    private userService: UserService,
    private _ngZone: NgZone,
    private _router: Router
  ) {
    this.subscribeToEvents();
  }
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }
  ngOnInit(): void {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
}
  sendMessage(): void {
    if (this.txtMessage) {
      this.message = new Message();
      this.message.guid = Guid.newGuid();
      this.message.clientUniqueId = this.uniqueID;
      this.message.type = "sent";
      this.message.text = this.txtMessage;
      this.message.date = new Date();
      this.message.owner = this.userService.currentUser$.value.name;
      this.messages.push(this.message);
      this.chatService.sendMessage(this.message);
      this.txtMessage = '';
    }
  }

  handleChange(messageValue: any): void {
    console.log({messageValue});
    this.txtMessage = messageValue;
  }

  private subscribeToEvents(): void {

    this.chatService.messageReceived.subscribe((message: Message) => {
      this._ngZone.run(() => {
        if (message.owner !== this.userService.currentUser$.value.name) {
          message.type = "received";
          this.messages.push(message);
        }
      });
    });
  }

}
