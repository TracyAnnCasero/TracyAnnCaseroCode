import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light2Component } from './light2.component';

describe('Light2Component', () => {
  let component: Light2Component;
  let fixture: ComponentFixture<Light2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
