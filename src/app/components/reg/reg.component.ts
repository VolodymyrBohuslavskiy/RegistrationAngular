import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(public userService: UserService) {
  }

  ngOnInit() {
  }

  sendRegForm(regForm: NgForm) {
    if (regForm.value.username !== '' &&
      regForm.value.username !== null &&
      regForm.value.password !== '' &&
      regForm.value.password !== null &&
      regForm.value.email !== '' &&
      regForm.value.email !== null
    ) {
      const user = {
        username: regForm.value.username,
        password: regForm.value.password,
        email: regForm.value.email
      };
      this.userService.saveUser(JSON.stringify(user));
      regForm.resetForm();
    }
  }
}
