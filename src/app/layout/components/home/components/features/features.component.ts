import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  featuresData = [
    {
      img: '../../../../../../assets/imgs/features-01.jpg',
      title: 'Quality',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Erroraccusantium, quas, sunt necessitatibus voluptas illo, numquam aut nostrum quo deleniti iste repellat in obcaecati consequatur. Rem dolorem adipisci ad id!',
      class: 'quality',
    },
    {
      img: '../../../../../../assets/imgs/features-02.jpg',
      title: 'Time',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Erroraccusantium, quas, sunt necessitatibus voluptas illo, numquam aut nostrum quo deleniti iste repellat in obcaecati consequatur. Rem dolorem adipisci ad id!',
      class: 'time',
    },
    {
      img: '../../../../../../assets/imgs/features-03.jpg',
      title: 'Passion',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Erroraccusantium, quas, sunt necessitatibus voluptas illo, numquam aut nostrum quo deleniti iste repellat in obcaecati consequatur. Rem dolorem adipisci ad id!',
      class: 'passion',
    },
  ];
}
