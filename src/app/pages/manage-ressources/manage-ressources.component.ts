import {Component, OnInit} from '@angular/core';
import {ExpenseService} from "../../service/expense.service";
import {MonthlyExpenseList} from "../../model/expense/MonthlyExpenseList";
import {FixedExpense} from "../../model/expense/FixedExpense";
import {MonthlyIncomeList} from "../../model/income/MonthlyIncomeList";
import {IncomeService} from "../../service/income.service";
import {FixedIncome} from "../../model/income/FixedIncome";
import {RessourceDisplayConfiguration} from "../../core/ressources-display/ressources-display.component";

@Component({
  selector: 'app-manage-ressources',
  templateUrl: './manage-ressources.component.html',
  styleUrls: ['./manage-ressources.component.scss']
})
export class ManageRessourcesComponent implements OnInit {
  monthlyExpenseList$!: MonthlyExpenseList;
  monthlyIncomeList$!: MonthlyIncomeList;

  get ressourceDisplayConfigurationList(): RessourceDisplayConfiguration[] {
    const list = [
      this.revenuesRessourceDisplayConfiguration(),
      this.billsRessourceDisplayConfiguration(),
      this.subscriptionRessourceDisplayConfiguration(),
      this.debtRessourceDisplayConfiguration(),
    ]
    console.table(list);
    return list;
  }

  get infoCardConfigurationList() {
    return [
      this.revenuesInfoCardConfiguration(),
      this.expensesInfoCardConfiguration(),
      this.savingsInfoCardConfiguration(),
      this.creditCardInfoConfiguration()
    ]
  }

  constructor(private expenseService: ExpenseService, private incomeService: IncomeService) {
  }

  ngOnInit() {
    this.expenseService.getMonthlyExpenseList$().subscribe({
      next: (response: MonthlyExpenseList) => {
        this.monthlyExpenseList$ = response;
      },
      error: (err) => console.error('Erreur lors de la récupération des données :', err),
    });
    this.incomeService.getMonthlyIncomeList$().subscribe({
      next: (response: MonthlyIncomeList) => {
        this.monthlyIncomeList$ = response;
      },
      error: (err) => console.error('Erreur lors de la récupération des données :', err),
    })
  }

  private revenuesRessourceDisplayConfiguration(): RessourceDisplayConfiguration {
    return {
      label: 'REVENUS',
      totalAmount: this.monthlyIncomeList$?.totalIncomeAmount,
      list: this.getIncomeList().flat(),
    }
  }

  private getIncomeList(): FixedIncome[] {
    const incomeList: FixedIncome[] = [];
    if (this.monthlyIncomeList$.salary) {
      incomeList.push(this.monthlyIncomeList$.salary);
    }
    if (this.monthlyIncomeList$.freelance) {
      incomeList.push(this.monthlyIncomeList$.freelance);
    }
    if (this.monthlyIncomeList$.aids) {
      incomeList.push(...this.monthlyIncomeList$.aids.flat());
    }
    return incomeList;
  }

  private billsRessourceDisplayConfiguration(): RessourceDisplayConfiguration {
    return {
      label: 'FACTURES',
      totalAmount: this.monthlyExpenseList$.billList.reduce((accumulator, bill) => {
        return accumulator + bill.amount;
      }, 0),
      list: this.monthlyExpenseList$.billList,
    }
  }

  private subscriptionRessourceDisplayConfiguration(): RessourceDisplayConfiguration {
    return {
      label: 'ABONNEMENTS',
      totalAmount: this.monthlyExpenseList$.subscriptionList.reduce((accumulator, subscription) => {
        return accumulator + subscription.amount;
      }, 0),
      list: this.monthlyExpenseList$.subscriptionList,
    }

  }

  private debtRessourceDisplayConfiguration(): RessourceDisplayConfiguration {
    return {
      label: 'DETTES',
      totalAmount: this.monthlyExpenseList$.creditList.reduce((accumulator, credit) => {
        return accumulator + credit.amount;
      }, 0),
      list: this.monthlyExpenseList$.creditList,
    }
  }

  private revenuesInfoCardConfiguration() {
    return {
      label: 'REVENUS',
      amount: this.monthlyIncomeList$.totalIncomeAmount,
    }
  }

  private expensesInfoCardConfiguration() {
    const totalBill: number = this.getTotalAmountFixedExpenseList(this.monthlyExpenseList$.billList);
    const totalSubscription: number = this.getTotalAmountFixedExpenseList(this.monthlyExpenseList$.subscriptionList);
    return {
      label: 'DEPENSES MENSUELLES',
      amount: totalBill + totalSubscription,
    };
  }

  private savingsInfoCardConfiguration() {
    return {
      label: 'EPARGNE MENSUELLE',
      amount: 600,
    };
  }

  private creditCardInfoConfiguration() {
    return {
      label: 'DETTES EN COURS',
      amount: this.monthlyExpenseList$.creditList.reduce((accumulator, credit) => {
        return accumulator + credit.amount;
      }, 0),
    }
  }

  private getTotalAmountFixedExpenseList(fixedExpenseList: FixedExpense[]): number {
    return fixedExpenseList.reduce(
      (total: number, monthlyExpense: FixedExpense) => total + monthlyExpense.amount,
      0);
  }
}
