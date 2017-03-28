import { Component, OnInit } from '@angular/core';

import { Item, LogService } from '../models/index';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(private logservice: LogService) {}

  public logged;
  date = new Date();
  model = new Item(0, '', this.date, false, 3);
  title = 'Add';
  added = false;

  ngOnInit() {
    this.logged = this.logservice.getItems();
  }

  addItem(model) {
  	this.logservice.addItem(model);
    this.added = true;
  }

  resetForm(submitted) {
    if(submitted) {
      this.added = false;
    } else {
      return;
    }
  }
}
