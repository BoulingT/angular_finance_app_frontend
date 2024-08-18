import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core";
import {MonthlyExpenseList} from "../../../model/expense/MonthlyExpenseList";
import {ExpenseService} from "../../../service/expense.service";
import {FixedExpense} from "../../../model/expense/FixedExpense";

@Component({
  selector: 'app-monthly-expenses-recap',
  templateUrl: './monthly-expenses-recap.component.html',
  styleUrls: ['./monthly-expenses-recap.component.scss']
})
export class MonthlyExpensesRecapComponent {
  @Input() monthlyExpenseList!: MonthlyExpenseList;

  get consommationBudget(): number {
    return this.monthlyExpenseList.consommationBudget.amount;
  }

  get billList(): FixedExpense[] {
    return this.monthlyExpenseList.billList;
  }

  get subscriptionList(): FixedExpense[] {
    return this.monthlyExpenseList.subscriptionList;
  }

  get creditList(): FixedExpense[] {
    return this.monthlyExpenseList.creditList;
  }

  get totalMonthlyFixedExpenses(): number {
    const totalBill: number = this.getTotalAmountFixedExpenseList(this.billList);
    const totalSubscription = this.getTotalAmountFixedExpenseList(this.subscriptionList);
    const totalCredit = this.getTotalAmountFixedExpenseList(this.creditList);
    return totalBill + totalSubscription + totalCredit;
  }

  private getTotalAmountFixedExpenseList(fixedExpenseList: FixedExpense[],): number {
    return fixedExpenseList.reduce(
      (total: number, monthlyExpense: FixedExpense) => total + monthlyExpense.amount
      , 0);
  }
}
