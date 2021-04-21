import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public userService: UserService) {

  }
  ngOnInit(): void {
    // const userInStorage = localStorage.getItem("loggedInUser");
    // console.log(userInStorage);
    // if(userInStorage !==null) {
    // const user = Users.find(x=> x.userId === Number(userInStorage));
    // this.currentUser$.next(user)
    // }
  }
  
}