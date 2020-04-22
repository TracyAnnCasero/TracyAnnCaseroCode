import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChateauComponent } from './chateau.component';

describe('ChateauComponent', () => {
  let component: ChateauComponent;
  let fixture: ComponentFixture<ChateauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChateauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
