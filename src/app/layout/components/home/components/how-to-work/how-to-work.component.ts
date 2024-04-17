import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-to-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-to-work.component.html',
  styleUrls: ['./how-to-work.component.scss'],
})
export class HowToWorkComponent {
  workStepsData = [
    {
      img: '../../../../../../assets/imgs/work-steps-1.png',
      title: 'Business Analysis',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus aperiam facilis eaque eveniet, repudiandae, nesciunt harum, atque quam excepturi',
    },
    {
      img: '../../../../../../assets/imgs/work-steps-2.png',
      title: 'Architecture',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus aperiam facilis eaque eveniet, repudiandae, nesciunt harum, atque quam excepturi',
    },
    {
      img: '../../../../../../assets/imgs/work-steps-3.png',
      title: '',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus aperiam facilis eaque eveniet, repudiandae, nesciunt harum, atque quam excepturi',
    },
  ];
}
