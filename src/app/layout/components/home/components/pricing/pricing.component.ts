import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {
  pricingData = [
    {
      type: 'Basic',
      className: 'box',
      labelName: '',
      img: '../../../../../../assets/imgs/hosting-basic.png',
      amount: '$15',
      time: 'per Month',
      list: [
        '10GB HDD Space',
        '5 Email Addresses Space',
        '2 Subdomains',
        '4 DataBases',
        'Basic Support',
      ],
    },
    {
      type: 'Addvanced',
      className: 'box popular',
      labelName: 'Most Popular',
      img: '../../../../../../assets/imgs/hosting-advanced.png',
      amount: '$25',
      time: 'per Month',
      list: [
        '20GB HDD Space',
        '10 Email Addresses Space',
        '5 Subdomains',
        '8 DataBases',
        'Addvanced Support',
      ],
    },
    {
      type: 'Professional',
      className: 'box',
      labelName: '',
      img: '../../../../../../assets/imgs/hosting-professional.png',
      amount: '$45',
      time: 'per Month',
      list: [
        '50GB HDD Space',
        '20 Email Addresses Space',
        '10 Subdomains',
        '20 DataBases',
        'Professional Support',
      ],
    },
  ];
}
