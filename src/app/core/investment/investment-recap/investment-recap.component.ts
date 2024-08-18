import {Component, Input} from '@angular/core';
import {MonthlyExpenseList} from "../../../model/expense/MonthlyExpenseList";
import {InvestmentAccountShort} from "../../../model/investment/investment-account-short";

@Component({
  selector: 'app-investment-recap',
  templateUrl: './investment-recap.component.html',
  styleUrls: ['./investment-recap.component.scss']
})
export class InvestmentRecapComponent {
  @Input() totalAmountInvested: number | undefined;
  @Input() peaAccountShortList: InvestmentAccountShort[] | undefined;
  @Input() perAccountShort: InvestmentAccountShort | undefined;

}
