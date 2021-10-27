import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MezzaComponent } from './mezza.component';

describe('MezzaComponent', () => {
  let component: MezzaComponent;
  let fixture: ComponentFixture<MezzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MezzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MezzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
