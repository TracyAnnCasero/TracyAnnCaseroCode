import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoastresidencesComponent } from './coastresidences.component';

describe('CoastresidencesComponent', () => {
  let component: CoastresidencesComponent;
  let fixture: ComponentFixture<CoastresidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoastresidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoastresidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
