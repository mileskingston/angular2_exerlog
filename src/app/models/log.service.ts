import { Injectable } from '@angular/core';

import { Item, Logged } from './index';

@Injectable()
export class LogService {

  private editing;

  constructor() { }

  getItems(): Item[] {
  	return Logged;
  }

  addItem(model) {
    model.id = Logged.length + 1;
  	Logged.push(model);
  	return Logged;
  }

  editReset() {
    for (let item in Logged) {
      Logged[item].editing = false;
    }
  }

  editItem(index) {
    for (let item in Logged) {
      Logged[item].editing = false;
      Logged[index].editing = true;
    }
    return Logged; 
  }

  editingItem(id) {
    for (let item in Logged) {
      if(Logged[item].id === +id) {
        return Logged[item];
      }
    }
  }

  updateItem(model) {
    for (let item in Logged) {
      if(Logged[item].id == model.id) {
        Logged[item] = model;
      }
    }
    return Logged;
  }

  deleteItem(index) {
		Logged.splice(index, 1);
  	return Logged;
  }
}