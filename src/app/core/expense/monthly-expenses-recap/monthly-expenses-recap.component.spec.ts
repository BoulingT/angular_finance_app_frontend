import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyExpensesRecapComponent } from './monthly-expenses-recap.component';

describe('MonthlyExpensesRecapComponent', () => {
  let component: MonthlyExpensesRecapComponent;
  let fixture: ComponentFixture<MonthlyExpensesRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyExpensesRecapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyExpensesRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
