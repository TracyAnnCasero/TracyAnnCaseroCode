import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Green2Component } from './green2.component';

describe('Green2Component', () => {
  let component: Green2Component;
  let fixture: ComponentFixture<Green2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Green2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Green2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
