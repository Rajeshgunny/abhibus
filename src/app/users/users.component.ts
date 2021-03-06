import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = USERS;
  user: User = {
    id: 1,
    name: 'Windstorm'
  };

  selectedUser: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  constructor() { }

  ngOnInit() {
  }

}
