import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableCostPageComponent } from './variable-cost-page.component';

describe('VariableCostPageComponent', () => {
  let component: VariableCostPageComponent;
  let fixture: ComponentFixture<VariableCostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariableCostPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableCostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
