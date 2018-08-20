import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { FilterByPipe } from '../filters-container/filter-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserListComponent,
    FilterByPipe
  ]
})
export class UserListModule { }
