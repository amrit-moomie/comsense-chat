(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XlM":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/message */ "qZOq");
/* harmony import */ var _utilities_guid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/guid */ "irP3");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chat.service */ "sjK5");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");













const _c0 = ["scrollMe"];
function ChatComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", msg_r3.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r3.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 3, msg_r3.date, "medium"), " ");
} }
function ChatComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", msg_r3.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, msg_r3.date, "medium"), "");
} }
function ChatComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_13_div_1_Template, 11, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_div_13_div_2_Template, 7, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r3.type == "received");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r3.type == "sent");
} }
function ChatComponent_mat_card_footer_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ">>>>> waiting to connect to server....");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChatComponent {
    constructor(chatService, userService, _ngZone, _router) {
        this.chatService = chatService;
        this.userService = userService;
        this._ngZone = _ngZone;
        this._router = _router;
        this.title = 'ClientApp';
        this.txtMessage = '';
        this.uniqueID = new Date().getTime().toString();
        this.messages = new Array();
        this.message = new src_app_models_message__WEBPACK_IMPORTED_MODULE_1__["Message"]();
        this.subscribeToEvents();
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    ngOnInit() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
    sendMessage() {
        if (this.txtMessage) {
            this.message = new src_app_models_message__WEBPACK_IMPORTED_MODULE_1__["Message"]();
            this.message.guid = _utilities_guid__WEBPACK_IMPORTED_MODULE_2__["Guid"].newGuid();
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
    handleChange(messageValue) {
        console.log({ messageValue });
        this.txtMessage = messageValue;
    }
    subscribeToEvents() {
        this.chatService.messageReceived.subscribe((message) => {
            this._ngZone.run(() => {
                if (message.owner !== this.userService.currentUser$.value.name) {
                    message.type = "received";
                    this.messages.push(message);
                }
            });
        });
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
    } }, decls: 21, vars: 3, consts: [[1, "chat-card"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "messaging"], [1, "inbox_msg"], [1, "mesgs"], [1, "msg_history"], ["scrollMe", ""], [4, "ngFor", "ngForOf"], [1, "type_msg"], [1, "input_msg_write"], ["type", "text", "placeholder", "Type a message", 1, "write_msg", 3, "ngModel", "ngModelChange", "keydown.enter"], ["mat-icon-button", "", 1, "msg_send_btn", 3, "click"], [4, "ngIf"], ["class", "incoming_msg", 4, "ngIf"], ["class", "outgoing_msg", 4, "ngIf"], [1, "incoming_msg"], [1, "incoming_msg_img"], [1, "received_msg"], [1, "received_withd_msg"], [1, "time_date"], [1, "outgoing_msg"], [1, "sent_msg"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Comsense Chat App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Development Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChatComponent_div_13_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_16_listener($event) { return ctx.txtMessage = $event; })("keydown.enter", function ChatComponent_Template_input_keydown_enter_16_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_17_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ChatComponent_mat_card_footer_20_Template, 3, 0, "mat-card-footer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.txtMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.chatService.connectionIsEstablished);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardFooter"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".chat-card[_ngcontent-%COMP%]{\n    max-width: 500px;\n    margin: auto;\n  }\n  \n  .chat_header[_ngcontent-%COMP%]{\n    color: #808f05\n  }\n  \n  img[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  \n  .inbox_people[_ngcontent-%COMP%] {\n    background: #f8f8f8 none repeat scroll 0 0;\n    float: left;\n    overflow: hidden;\n    width: 40%;\n    border-right: 1px solid #c4c4c4;\n  }\n  \n  .inbox_msg[_ngcontent-%COMP%] {\n    border: 1px solid #c4c4c4;\n    clear: both;\n    overflow: hidden;\n  }\n  \n  .top_spac[_ngcontent-%COMP%] {\n    margin: 20px 0 0;\n  }\n  \n  .recent_heading[_ngcontent-%COMP%] {\n    float: left;\n    width: 40%;\n  }\n  \n  .srch_bar[_ngcontent-%COMP%] {\n    display: inline-block;\n    text-align: right;\n    width: 60%;\n    padding:\n  }\n  \n  .headind_srch[_ngcontent-%COMP%] {\n    padding: 10px 29px 10px 20px;\n    overflow: hidden;\n    border-bottom: 1px solid #c4c4c4;\n  }\n  \n  .recent_heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #808f05;\n    font-size: 21px;\n    margin: auto;\n  }\n  \n  .srch_bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: 1px solid #cdcdcd;\n    border-width: 0 0 1px 0;\n    width: 80%;\n    padding: 2px 0 4px 6px;\n    background: none;\n  }\n  \n  .srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n    border: medium none;\n    padding: 0;\n    color: #707070;\n    font-size: 18px;\n  }\n  \n  .srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n    margin: 0 0 0 -27px;\n  }\n  \n  .chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 15px;\n    color: #464646;\n    margin: 0 0 8px 0;\n  }\n  \n  .chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      font-size: 13px;\n      float: right;\n    }\n  \n  .chat_ib[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: #989898;\n    margin: auto\n  }\n  \n  .chat_img[_ngcontent-%COMP%] {\n    float: left;\n    width: 11%;\n  }\n  \n  .chat_ib[_ngcontent-%COMP%] {\n    float: left;\n    padding: 0 0 0 15px;\n    width: 88%;\n  }\n  \n  .chat_people[_ngcontent-%COMP%] {\n    overflow: hidden;\n    clear: both;\n  }\n  \n  .chat_list[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #c4c4c4;\n    margin: 0;\n    padding: 18px 16px 10px;\n  }\n  \n  .inbox_chat[_ngcontent-%COMP%] {\n    height: 550px;\n    overflow-y: scroll;\n  }\n  \n  .active_chat[_ngcontent-%COMP%] {\n    background: #ebebeb;\n  }\n  \n  .incoming_msg_img[_ngcontent-%COMP%] {\n    display: inline-block;\n   \n  }\n  \n  .received_msg[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 0 0 0 0px;\n    vertical-align: top;\n    width: 92%;\n  }\n  \n  .received_withd_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    background: #ebebeb none repeat scroll 0 0;\n    border-radius: 3px;\n    color: #646464;\n    font-size: 14px;\n    margin: 0;\n    padding: 5px 10px 5px 12px;\n    width: 100%;\n  }\n  \n  .time_date[_ngcontent-%COMP%] {\n    color: #747474;\n    display: block;\n    font-size: 12px;\n    margin: 0px 0 5px;\n  }\n  \n  .received_withd_msg[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n  \n  .mesgs[_ngcontent-%COMP%] {\n    padding: 10px 10px 0 10px;\n  }\n  \n  .sent_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    background: #147efb none repeat scroll 0 0;\n    border-radius: 3px;\n    font-size: 14px;\n    margin: 0;\n    color: #fff;\n    padding: 5px 10px 5px 12px;\n    width: 100%;\n  }\n  \n  .outgoing_msg[_ngcontent-%COMP%] {\n    overflow: hidden;\n  }\n  \n  .sent_msg[_ngcontent-%COMP%] {\n    float: right;\n    width: 85%;\n  }\n  \n  .input_msg_write[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n    border: medium none;\n    color: white;\n    font-size: 15px;\n    min-height: 48px;\n    width: 100%;\n  }\n  \n  .type_msg[_ngcontent-%COMP%] {\n    border-top: 1px solid #c4c4c4;\n    position: relative;\n  }\n  \n  .msg_send_btn[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 11px;\n    width: auto;\n  }\n  \n  .messaging[_ngcontent-%COMP%] {\n    padding: 0 0 50px 0;\n  }\n  \n  .msg_history[_ngcontent-%COMP%] {\n    height: 516px;\n    overflow-y: auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRTtFQUNGOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDBDQUEwQztJQUMxQyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDViwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFHQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVjtFQUNGOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtREFBbUQ7SUFDbkQsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVFO01BQ0UsZUFBZTtNQUNmLFlBQVk7SUFDZDs7RUFFRjtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2Q7RUFDRjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsU0FBUztJQUNULHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7O0VBRXZCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7RUFDWjs7RUFFQTtJQUNFLG1EQUFtRDtJQUNuRCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7RUFDYjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtY2FyZHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICBcbiAgLmNoYXRfaGVhZGVye1xuICAgIGNvbG9yOiAjODA4ZjA1XG4gIH1cbiAgXG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuaW5ib3hfcGVvcGxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjNGM0YzQ7XG4gIH1cbiAgXG4gIC5pbmJveF9tc2cge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLnRvcF9zcGFjIHtcbiAgICBtYXJnaW46IDIwcHggMCAwO1xuICB9XG4gIFxuICBcbiAgLnJlY2VudF9oZWFkaW5nIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIFxuICAuc3JjaF9iYXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogNjAlO1xuICAgIHBhZGRpbmc6XG4gIH1cbiAgXG4gIC5oZWFkaW5kX3NyY2gge1xuICAgIHBhZGRpbmc6IDEwcHggMjlweCAxMHB4IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0YzRjNDtcbiAgfVxuICBcbiAgLnJlY2VudF9oZWFkaW5nIGg0IHtcbiAgICBjb2xvcjogIzgwOGYwNTtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIFxuICAuc3JjaF9iYXIgaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZGNkY2Q7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiAycHggMCA0cHggNnB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbiAgXG4gIC5zcmNoX2JhciAuaW5wdXQtZ3JvdXAtYWRkb24gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAgbWFyZ2luOiAwIDAgMCAtMjdweDtcbiAgfVxuICBcbiAgLmNoYXRfaWIgaDUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzQ2NDY0NjtcbiAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgfVxuICBcbiAgICAuY2hhdF9pYiBoNSBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gIFxuICAuY2hhdF9pYiBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM5ODk4OTg7XG4gICAgbWFyZ2luOiBhdXRvXG4gIH1cbiAgXG4gIC5jaGF0X2ltZyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDExJTtcbiAgfVxuICBcbiAgLmNoYXRfaWIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAgMCAwIDE1cHg7XG4gICAgd2lkdGg6IDg4JTtcbiAgfVxuICBcbiAgLmNoYXRfcGVvcGxlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG4gIFxuICAuY2hhdF9saXN0IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0YzRjNDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMThweCAxNnB4IDEwcHg7XG4gIH1cbiAgXG4gIC5pbmJveF9jaGF0IHtcbiAgICBoZWlnaHQ6IDU1MHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuICBcbiAgLmFjdGl2ZV9jaGF0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICB9XG4gIFxuICAuaW5jb21pbmdfbXNnX2ltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgXG4gIH1cbiAgXG4gIC5yZWNlaXZlZF9tc2cge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwIDAgMCAwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3aWR0aDogOTIlO1xuICB9XG4gIFxuICAucmVjZWl2ZWRfd2l0aGRfbXNnIHAge1xuICAgIGJhY2tncm91bmQ6ICNlYmViZWIgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgY29sb3I6ICM2NDY0NjQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLnRpbWVfZGF0ZSB7XG4gICAgY29sb3I6ICM3NDc0NzQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogMHB4IDAgNXB4O1xuICB9XG4gIFxuICAucmVjZWl2ZWRfd2l0aGRfbXNnIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG4gIFxuICAubWVzZ3Mge1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwIDEwcHg7XG4gIH1cbiAgXG4gIC5zZW50X21zZyBwIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTQ3ZWZiIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5vdXRnb2luZ19tc2cge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5zZW50X21zZyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiA4NSU7XG4gIH1cbiAgXG4gIC5pbnB1dF9tc2dfd3JpdGUgaW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IG1lZGl1bSBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWluLWhlaWdodDogNDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLnR5cGVfbXNnIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2M0YzRjNDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5tc2dfc2VuZF9idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDExcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgXG4gIC5tZXNzYWdpbmcge1xuICAgIHBhZGRpbmc6IDAgMCA1MHB4IDA7XG4gIH1cbiAgXG4gIC5tc2dfaGlzdG9yeSB7XG4gICAgaGVpZ2h0OiA1MTZweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css']
            }]
    }], function () { return [{ type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { myScrollContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scrollMe']
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ammritt/workspace/Comsense-chat/client/src/main.ts */"zUnb");


/***/ }),

/***/ "7muU":
/*!********************************!*\
  !*** ./src/app/store/users.ts ***!
  \********************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
const Users = [
    {
        "email": "amrit.moomie@comsenseinc.com",
        "name": "Amrit",
        "password": "comsense1;;",
        "userId": 1
    },
    {
        "email": "Mark.Comeau@comsenseinc.com",
        "name": "Mark.Comeau",
        "password": "comsense1;;",
        "userId": 2
    },
    {
        "email": "arash.sabet@comsenseinc.com",
        "name": "Arash",
        "password": "comsense1;;",
        "userId": 3
    },
    {
        "email": "wiebo@binaryops.ca",
        "name": "Wiebo",
        "password": "comsense1;;",
        "userId": 4
    },
    {
        "email": "mark@binaryops.ca",
        "name": "Mark.Voorberg",
        "password": "comsense1;;",
        "userId": 5
    },
];


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //"hubUrl": "http://10.0.0.186:7071/api/",
    "hubUrl": "https://comsensechat.azurewebsites.net/api/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "+XlM");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login/login.component */ "gEuR");






function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login");
} }
class AppComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        // const userInStorage = localStorage.getItem("loggedInUser");
        // console.log(userInStorage);
        // if(userInStorage !==null) {
        // const user = Users.find(x=> x.userId === Number(userInStorage));
        // this.currentUser$.next(user)
        // }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["loginTemplate", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.userService.currentUser$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"], _login_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/chat.component */ "+XlM");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login/login.component */ "gEuR");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/chat.service */ "sjK5");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/material/material.module */ "jAig");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_chat_service__WEBPACK_IMPORTED_MODULE_9__["ChatService"], _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _login_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"],
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _login_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"]
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"],
                    _shared_material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"]
                ],
                providers: [_services_chat_service__WEBPACK_IMPORTED_MODULE_9__["ChatService"], _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gEuR":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_store_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/users */ "7muU");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function LoginComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The username and password were not recognized ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage());
} }
class LoginComponent {
    constructor(fb, userService) {
        this.fb = fb;
        this.userService = userService;
        this.loginInvalid = false;
        this.formSubmitAttempt = false;
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    doLogin() {
        // localStorage.setItem("loggedInUser", "1");
        const user = src_app_store_users__WEBPACK_IMPORTED_MODULE_2__["Users"].find(x => x.email === this.form.value.email);
        if (user === undefined) {
            this.loginInvalid = true;
        }
        else {
            localStorage.setItem("loggedInUser", String(user.userId));
            this.userService.currentUser$.next(user);
        }
    }
    getErrorMessage() {
        if (this.form.controls['email'].hasError('required')) {
            return 'You must enter a value';
        }
        return this.form.controls['email'] ? 'Not a valid email' : '';
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 15, vars: 4, consts: [[3, "formGroup", "ngSubmit"], [4, "ngIf"], ["appearance", "fill"], ["matInput", "", "placeholder", "pat@example.com", "formControlName", "email", "required", ""], [1, "full-width-input"], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "password", "required", ""], ["mat-raised-button", "", "color", "primary", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { return ctx.doLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_mat_error_5_Template, 2, 0, "mat-error", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_mat_error_10_Template, 2, 1, "mat-error", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginInvalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["mat-card[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 2em auto;\n    text-align: center;\n  }\n  \n  mat-form-field[_ngcontent-%COMP%] {\n    display: block;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMmVtIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "irP3":
/*!***********************************!*\
  !*** ./src/app/utilities/guid.ts ***!
  \***********************************/
/*! exports provided: Guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
// Example of a bunch of GUIDs
for (var i = 0; i < 100; i++) {
    var id = Guid.newGuid();
    console.log(id);
}


/***/ }),

/***/ "jAig":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
















class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                ],
                exports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "qZOq":
/*!***********************************!*\
  !*** ./src/app/models/message.ts ***!
  \***********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
class Message {
}


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _store_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/users */ "7muU");




class UserService {
    constructor() {
        this.currentUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser !== null) {
            this.currentUser$.next(_store_users__WEBPACK_IMPORTED_MODULE_2__["Users"].find(u => u.userId === Number(loggedInUser)));
        }
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sjK5":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class ChatService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.messageReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.connectionEstablished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.connectionIsEstablished = false;
        console.log('here');
        this.createConnection();
    }
    sendMessage(message) {
        this.httpClient.post(this.talkUrl, message).subscribe();
    }
    get talkUrl() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hubUrl + 'talk';
    }
    get negotiateUrl() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hubUrl + 'negotiate';
    }
    createConnection() {
        this.httpClient.get(this.negotiateUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((x) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.handleNegotiate(x);
        }))).subscribe();
    }
    handleNegotiate(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('NotificationHubClient', `Negotiation results: ${JSON.stringify(response)}`);
            const options = {
                // logger: logger,
                accessTokenFactory: () => response.accessToken,
                logMessageContent: true
                //,
            };
            this._hubConnection = this._hubConnection || new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__["HubConnectionBuilder"]()
                .withUrl(response.url, options)
                .configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace)
                .withAutomaticReconnect()
                .build();
            this.registerOnServerEvents();
            this.startConnection();
        });
    }
    startConnection() {
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
    registerOnServerEvents() {
        this._hubConnection.on('newMessage', (data) => {
            console.log({ data });
            this.messageReceived.emit(data);
        });
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "+XlM");





const routes = [{ path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"] }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map