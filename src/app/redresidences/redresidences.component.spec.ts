import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedresidencesComponent } from './redresidences.component';

describe('RedresidencesComponent', () => {
  let component: RedresidencesComponent;
  let fixture: ComponentFixture<RedresidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedresidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedresidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
