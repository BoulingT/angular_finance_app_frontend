import {Component, Input, OnInit} from '@angular/core';
import {FixedExpense} from "../../model/expense/FixedExpense";
import {FixedIncome} from "../../model/income/FixedIncome";
import {MonthlyIncomeList} from "../../model/income/MonthlyIncomeList";
import {FixedResource} from "../../model/FixedRessource";

export interface RessourceDisplayConfiguration {
  label: string,
  totalAmount: number,
  list: FixedResource[],
}

@Component({
  selector: 'app-ressources-display',
  templateUrl: './ressources-display.component.html',
  styleUrls: ['./ressources-display.component.scss']
})
export class RessourcesDisplayComponent {
  @Input() ressourceDisplayConfiguration!: RessourceDisplayConfiguration;
}
