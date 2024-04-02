import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})
export class ServicesSectionComponent {
  servicesData = [
    { icon: 'fas fa-user-shield fa-4x', serName: 'Services' },
    { icon: 'fas fa-tools fa-4x', serName: 'Fixing Issues' },
    { icon: 'fas fa-map-marked-alt fa-4x', serName: 'Location' },
    { icon: 'fas fa-laptop-code fa-4x', serName: 'Coding' },
    { icon: 'fas fa-palette fa-4x', serName: 'Design' },
    { icon: 'fas fa-bullhorn fa-4x', serName: 'marketing' },
  ];
}
