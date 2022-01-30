import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedCostPageComponent } from './fixed-cost-page.component';

describe('FixedCostPageComponent', () => {
  let component: FixedCostPageComponent;
  let fixture: ComponentFixture<FixedCostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedCostPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedCostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
