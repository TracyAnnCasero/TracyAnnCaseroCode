import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlamresidencesComponent } from './glamresidences.component';

describe('GlamresidencesComponent', () => {
  let component: GlamresidencesComponent;
  let fixture: ComponentFixture<GlamresidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlamresidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlamresidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
