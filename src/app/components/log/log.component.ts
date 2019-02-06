import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(
    public userService: UserService
  ) {
  }

  ngOnInit() {
  }

  sendloginForm(loginForm: NgForm) {
    if (loginForm.valid &&
      loginForm.value.username !== '' &&
      loginForm.value.password !== '' &&
      loginForm.value.password !== null &&
      loginForm.value.username !== null) {
      const user = {username: loginForm.value.username, password: loginForm.value.password};
      this.userService.loginUser(JSON.stringify(user));
      loginForm.resetForm();
    }


  }
}
