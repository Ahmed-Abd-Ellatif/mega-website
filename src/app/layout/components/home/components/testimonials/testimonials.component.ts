import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonialsData = [
    {
      img: '../../../../../../assets/imgs/avatar-01.png',
      name: 'Ahmed AbdEllatif',
      jobTitle: 'Angular Developer',
    },
    {
      img: '../../../../../../assets/imgs/avatar-02.png',
      name: 'Ahmed AbdEllatif',
      jobTitle: 'Angular Developer',
    },
    {
      img: '../../../../../../assets/imgs/avatar-03.png',
      name: 'Ahmed AbdEllatif',
      jobTitle: 'Angular Developer',
    },
    {
      img: '../../../../../../assets/imgs/avatar-04.png',
      name: 'Ahmed AbdEllatif',
      jobTitle: 'Angular Developer',
    },
    {
      img: '../../../../../../assets/imgs/avatar-05.png',
      name: 'Ahmed AbdEllatif',
      jobTitle: 'Angular Developer',
    },
    {
      img: '../../../../../../assets/imgs/avatar-06.png',
      name: 'Ahmed AbdEllatif',
      jobTitle: 'Angular Developer',
    },
  ];
}
