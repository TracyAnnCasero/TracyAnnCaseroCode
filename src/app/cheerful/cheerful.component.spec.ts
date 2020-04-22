import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheerfulComponent } from './cheerful.component';

describe('CheerfulComponent', () => {
  let component: CheerfulComponent;
  let fixture: ComponentFixture<CheerfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheerfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheerfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
