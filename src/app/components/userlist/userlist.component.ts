import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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


  delete(id: number) {
    this.users.splice(this.users.findIndex(value => value.id === id), 1);
    this.userService.deleteUser(id);

  }

  ngOnInit() {
    this.userService.getUsers().subscribe((r) => {
      this.users = r;
    });
  }


}
