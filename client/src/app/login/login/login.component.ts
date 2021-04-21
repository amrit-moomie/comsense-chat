import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/store/users';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;
  constructor(
    private fb: FormBuilder,
    private userService: UserService) { 
    this.form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });}

  ngOnInit(): void {
  }

  doLogin() {
    // localStorage.setItem("loggedInUser", "1");
    const user = Users.find(x=> x.email === this.form.value.email);
    if (user === undefined) {
      this.loginInvalid = true;
    } else {
      localStorage.setItem("loggedInUser", String(user.userId))
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
