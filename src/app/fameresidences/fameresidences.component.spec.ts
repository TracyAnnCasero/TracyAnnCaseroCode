import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FameresidencesComponent } from './fameresidences.component';

describe('FameresidencesComponent', () => {
  let component: FameresidencesComponent;
  let fixture: ComponentFixture<FameresidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FameresidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FameresidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
