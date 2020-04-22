import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LushresidencesComponent } from './lushresidences.component';

describe('LushresidencesComponent', () => {
  let component: LushresidencesComponent;
  let fixture: ComponentFixture<LushresidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LushresidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LushresidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
