import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldofficeresidencesComponent } from './goldofficeresidences.component';

describe('GoldofficeresidencesComponent', () => {
  let component: GoldofficeresidencesComponent;
  let fixture: ComponentFixture<GoldofficeresidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldofficeresidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldofficeresidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
