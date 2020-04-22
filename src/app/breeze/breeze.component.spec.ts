import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreezeComponent } from './breeze.component';

describe('BreezeComponent', () => {
  let component: BreezeComponent;
  let fixture: ComponentFixture<BreezeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreezeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
