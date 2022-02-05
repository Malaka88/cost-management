import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIncomeDialogComponent } from './create-income-dialog.component';

describe('CreateIncomeDialogComponent', () => {
  let component: CreateIncomeDialogComponent;
  let fixture: ComponentFixture<CreateIncomeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIncomeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIncomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
