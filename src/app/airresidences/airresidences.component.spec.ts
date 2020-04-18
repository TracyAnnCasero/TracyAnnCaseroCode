import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirresidencesComponent } from './airresidences.component';

describe('AirresidencesComponent', () => {
  let component: AirresidencesComponent;
  let fixture: ComponentFixture<AirresidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirresidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirresidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
