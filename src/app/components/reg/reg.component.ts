import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor() {
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
      const user = {username: regForm.value.username, password: regForm.value.password, email: regForm.value.email};
      console.log(JSON.stringify(user));
      regForm.resetForm();
    }
  }
}
