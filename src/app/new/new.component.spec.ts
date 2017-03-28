import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewComponent } from './new.component';
import { LogService } from '../models/index';

xdescribe('NewComponent', () => {
  let comp: NewComponent,
    fixture: ComponentFixture<NewComponent>,
    de: DebugElement,
    el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComponent ],
    });

    fixture = TestBed.createComponent(NewComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h2'));
  }));

  it('should display new-app component', () => {
    expect(comp).toBeTruthy();
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toEqual(comp.title);
  });
});
