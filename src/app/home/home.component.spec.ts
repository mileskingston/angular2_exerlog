import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { HomeComponent } from './home.component';
import { LogService, Item } from '../models/index';

xdescribe('HomeComponent', () => {
  let component: HomeComponent,
    fixture: ComponentFixture<HomeComponent>,
    de: DebugElement,
    el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [ HomeComponent ],
      providers: [ 
        { provide: LogService },
      ],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;  
    el = de.nativeElement;
  });

  it('should create home-app', () => {
    expect(component).toBeTruthy();
  });

  it('should have original page title', () => {
    fixture.detectChanges();
    fixture.debugElement.query(By.css('h1'));
    expect(el.textContent).toContain(component.title);
  });

  it('should NOT have any items before ngOnInit', () => {
    expect(component.logged).toBeFalsy();
  });

  it('should contain at least 3 logs ngOnInit', () => {
    fixture.detectChanges();
    expect(component.logged.length).toBeGreaterThan(1, 'should have items after ngOnInit');
  });

  // on click should direct to edit screen of given id
});
