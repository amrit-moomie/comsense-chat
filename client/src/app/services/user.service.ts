import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User, Users } from "../store/users";

@Injectable()  
export class UserService {
    currentUser$: BehaviorSubject<User> = new BehaviorSubject(null);
    constructor() {
       const loggedInUser =  localStorage.getItem("loggedInUser");
       if (loggedInUser !==null) {
           this.currentUser$.next(Users.find(u => u.userId === Number(loggedInUser)));
       }
    }
}
