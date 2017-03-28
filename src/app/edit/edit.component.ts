import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Item, LogService } from '../models/index';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private logservice: LogService, private route: ActivatedRoute) { }

  private id: number;
  private sub: any;
  private model: any;
  public logged;
  title = 'Edit';
  updated = false;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.model = this.logservice.editingItem(this.id);
    });
  }

  updateItem(model) {
    this.logservice.updateItem(model);

    // if(model.editing) {
    //   // this.logservice.updateItem(model);
    // } else {
    //   return;
    // }
    this.updated = true;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();  
  }
}
