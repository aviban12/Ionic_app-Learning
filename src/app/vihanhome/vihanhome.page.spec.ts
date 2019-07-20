import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VihanhomePage } from './vihanhome.page';

describe('VihanhomePage', () => {
  let component: VihanhomePage;
  let fixture: ComponentFixture<VihanhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VihanhomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VihanhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
