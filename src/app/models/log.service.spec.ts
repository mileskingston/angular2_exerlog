import { TestBed, async, inject } from '@angular/core/testing';
import { LogService, Item, Logged } from './index';

fdescribe('LogService', () => {

	let logservice: LogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogService]
   	});

   	logservice = new LogService();
  });

  it('Get items log service should be defined', () => {
    inject([LogService], (logService) => {
      logservice.getItems();
      expect(logservice.getItems()).toBeDefined();
    });
  });

  it('Get items log service should equal logged data', () => {
    inject([LogService], (logService) => {
      logservice.getItems();
      expect(logservice.getItems()).toEqual(Logged);
    });
  });

  // get Items
  // it('log service should be defined', () => {
  //   inject([LogService], (logService) => {
  //     logservice.getItems();
  //     expect(logservice.getItems()).toBeDefined();
  //   });
  // });

  // add Item

  // editReset

  // editItem

  // editing Item

  // updateItem

  // delete Item
});
