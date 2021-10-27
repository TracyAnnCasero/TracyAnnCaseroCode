import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SailresidencesComponent } from './sailresidences.component';

describe('SailresidencesComponent', () => {
  let component: SailresidencesComponent;
  let fixture: ComponentFixture<SailresidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SailresidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SailresidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
