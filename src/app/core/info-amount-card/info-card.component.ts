import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-info-amount-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  @Input() title!: string;
  @Input() amount!: number;
  @Input() performance!: number;
}
