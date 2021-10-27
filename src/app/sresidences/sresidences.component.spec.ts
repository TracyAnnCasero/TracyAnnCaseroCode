import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SresidencesComponent } from './sresidences.component';

describe('SresidencesComponent', () => {
  let component: SresidencesComponent;
  let fixture: ComponentFixture<SresidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SresidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SresidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
