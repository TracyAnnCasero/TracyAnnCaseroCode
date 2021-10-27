import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldresidencesComponent } from './goldresidences.component';

describe('GoldresidencesComponent', () => {
  let component: GoldresidencesComponent;
  let fixture: ComponentFixture<GoldresidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldresidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldresidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
