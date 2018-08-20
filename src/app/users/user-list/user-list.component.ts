import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: User[];
  public selectedQty = 50;
  public qtyOptions: Array<number> = [5, 10, 20, 50];
  public selectedGender = 'female';
  private selectedFilters = '';

  constructor(private _userService: UserService) {
    this._userService.filterSubject.subscribe(data => this.selectedFilters = data );
  }

  ngOnInit() {
    this.getUsers(this.selectedQty, this.selectedGender);
  }

  getUsers(qty, gender) {
    this._userService.getUsers(qty, gender).subscribe((users) => this.users = users);
  }

  onSelectedQty() {
    this.getUsers(this.selectedQty, this.selectedGender);
  }
}
