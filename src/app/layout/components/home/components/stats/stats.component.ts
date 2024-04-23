import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  statsData = [
    {
      icon: 'far fa-user fa-2x fa-fw',
      number: '300',
      text: 'Clients',
    },
    {
      icon: 'fas fa-code fa-2x fa-fw',
      number: '400',
      text: 'projects',
    },
    {
      icon: 'fas fa-globe fa-2x fa-fw',
      number: '12',
      text: 'Countries',
    },
    {
      icon: 'far fa-money-bill-alt fa-2x fa-fw',
      number: '500k',
      text: 'Money',
    },
  ];
}
