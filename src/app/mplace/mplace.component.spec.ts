import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MplaceComponent } from './mplace.component';

describe('MplaceComponent', () => {
  let component: MplaceComponent;
  let fixture: ComponentFixture<MplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
