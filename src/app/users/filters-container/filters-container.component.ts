import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-filters-container',
  templateUrl: './filters-container.component.html',
  styleUrls: ['./filters-container.component.css']
})
export class FiltersContainerComponent implements OnInit {

  private term = '';
  private ageRanges = [{
    value: '18_99',
    display: 'all',
  }, {
    value: '18_25',
    display: '18 - 25'
  }, {
    value: '26_30',
    display: '26 - 30',
  }, {
    value: '31_36',
    display: '31 - 36',
  }, {
    value: '36_99',
    display: '36+',
  }];

  private filters = {};

  constructor(private userService: UserService) {
    this.filters = {
      term: '',
      age: '18_99'
    };
  }

  ngOnInit() {
    this.updateFilters();
  }

  updateFilters() {
    this.userService.filterSubject.next(this.filters);
  }

  onSearch() {
    this.updateFilters();
  }

  onAgeSelect() {
    this.updateFilters();
  }
}
