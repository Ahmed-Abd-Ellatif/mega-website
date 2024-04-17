import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  unitData = [
    { count: '15', name: 'Days' },
    { count: '08', name: 'Hours' },
    { count: '45', name: 'Minutes' },
    { count: '55', name: 'Seconds' },
  ];
}
