import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsOverviewPageComponent } from './assets-overview-page.component';

describe('AssetsOverviewPageComponent', () => {
  let component: AssetsOverviewPageComponent;
  let fixture: ComponentFixture<AssetsOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsOverviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
