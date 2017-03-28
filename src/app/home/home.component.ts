import { Component, OnInit } from '@angular/core';

import { Item, LogService } from '../models/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private logservice: LogService) {}

  public logged;
  title = 'Logger';

  ngOnInit() {
    this.logged = this.logservice.getItems();
  }

  editItem(index) {
    this.logservice.editItem(index);
  }

  deleteItem(index) {
    this.logservice.deleteItem(index);
  }
}
