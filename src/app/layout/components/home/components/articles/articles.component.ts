import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent {
  articlesData = [
    {
      img: '../../../../../../assets/imgs/cat-01.jpg',
      title: 'Test Title',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, distinctio!',
    },
    {
      img: '../../../../../../assets/imgs/cat-02.jpg',
      title: 'Test Title',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, distinctio!',
    },
    {
      img: '../../../../../../assets/imgs/cat-03.jpg',
      title: 'Test Title',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, distinctio!',
    },
    {
      img: '../../../../../../assets/imgs/cat-04.jpg',
      title: 'Test Title',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, distinctio!',
    },
    {
      img: '../../../../../../assets/imgs/cat-05.jpg',
      title: 'Test Title',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, distinctio!',
    },
    {
      img: '../../../../../../assets/imgs/cat-06.jpg',
      title: 'Test Title',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, distinctio!',
    },
    {
      img: '../../../../../../assets/imgs/cat-07.jpg',
      title: 'Test Title',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, distinctio!',
    },
    {
      img: '../../../../../../assets/imgs/cat-08.jpg',
      title: 'Test Title',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, distinctio!',
    },
  ];
}
