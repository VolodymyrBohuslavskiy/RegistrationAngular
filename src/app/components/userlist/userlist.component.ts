import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: User[] = [];

  constructor(
    public userService: UserService,

  ) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((r) => {
      this.users = r;
    });
  }

}
