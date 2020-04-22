import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mezza2Component } from './mezza2.component';

describe('Mezza2Component', () => {
  let component: Mezza2Component;
  let fixture: ComponentFixture<Mezza2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mezza2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mezza2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
