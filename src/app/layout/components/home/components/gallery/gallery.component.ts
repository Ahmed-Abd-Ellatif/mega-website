import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  galleryData = [
    { img: '../../../../../../assets/imgs/gallery-01.png' },
    { img: '../../../../../../assets/imgs/gallery-02.png' },
    { img: '../../../../../../assets/imgs/gallery-03.jpg' },
    { img: '../../../../../../assets/imgs/gallery-04.png' },
    { img: '../../../../../../assets/imgs/gallery-05.jpg' },
    { img: '../../../../../../assets/imgs/gallery-06.png' },
  ];
}
