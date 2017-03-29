import { TestBed, async, inject } from '@angular/core/testing';
import { LogService, Item, Logged } from './index';

fdescribe('LogService', () => {

	let logservice: LogService,
    model = {
      'id': 4 , 
      'title': 'New log', 
      'updated': 1589504153453, 
      'editing': false, 
      'amount': 4
    },
    index = 0,
    id = 1;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogService]
     });

   	logservice = new LogService();
  });

  it('Log service should be defined', () => {
    inject([LogService], (logService) => {
      expect(logservice).toBeDefined();
    });
  });

  it('Get items should equal logged data', () => {
    let get = logservice.getItems();
    expect(get).toEqual(Logged);
  });

  // add Item
  it('Add item should have a length of 4', () => {
    logservice.addItem(model);
    expect(Logged.length).toEqual(4);
  });  

  // editReset
  it('Editing reset should display all items as editing false', () => {
    logservice.editItem(index); // change editing to true on one item
    logservice.editReset();
    expect(Logged[index].editing).toBe(false);
  });

  // editItem
  it('Edit item should display item as editing true', () => {
    logservice.editItem(index);
    expect(Logged[index].editing).toBe(true);
  });  

  // editing Item
  it('Edit item should display item as editing true', () => {
    logservice.editItem(index);
    expect(Logged[index].editing).toBe(true);
  });  

  // updateItem
  it('updated item should show updated data', () => {
    let model = {
      'id': 1, 
      'title': 'New title', 
      'updated': '1589504153453',
      'amount': 4
    };

    expect(Logged[index].title).toBe('Narco');
    expect(Logged[index].updated).toBe('1389504153453');
    expect(Logged[index].amount).toBe(3);

    logservice.updateItem(model);

    expect(Logged[index].title).toBe('New title');
    expect(Logged[index].updated).toBe('1589504153453');
    expect(Logged[index].amount).toBe(4 );
  });

  // delete Item
  it('Delete item should have a length of 3', () => {
    logservice.deleteItem(0);
    expect(Logged.length).toEqual(3);
  });
});
