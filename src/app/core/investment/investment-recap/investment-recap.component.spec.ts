import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentRecapComponent } from './investment-recap.component';

describe('InvestmentRecapComponent', () => {
  let component: InvestmentRecapComponent;
  let fixture: ComponentFixture<InvestmentRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentRecapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
