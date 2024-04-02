import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
})
export class TeamMembersComponent {
  teamData = [
    {
      img: '../../../../../../assets/imgs/team-01.jpg',
      name: 'Ahmed AbdEllatif',
      desc: 'Simple Short Description',
    },
    {
      img: '../../../../../../assets/imgs/team-02.jpg',
      name: 'Ahmed AbdEllatif',
      desc: 'Simple Short Description',
    },
    {
      img: '../../../../../../assets/imgs/team-03.jpg',
      name: 'Ahmed AbdEllatif',
      desc: 'Simple Short Description',
    },
    {
      img: '../../../../../../assets/imgs/team-04.jpg',
      name: 'Ahmed AbdEllatif',
      desc: 'Simple Short Description',
    },
    {
      img: '../../../../../../assets/imgs/team-05.png',
      name: 'Ahmed AbdEllatif',
      desc: 'Simple Short Description',
    },
    {
      img: '../../../../../../assets/imgs/team-06.png',
      name: 'Ahmed AbdEllatif',
      desc: 'Simple Short Description',
    },
    {
      img: '../../../../../../assets/imgs/team-07.jpg',
      name: 'Ahmed AbdEllatif',
      desc: 'Simple Short Description',
    },
    {
      img: '../../../../../../assets/imgs/team-08.jpg',
      name: 'Ahmed AbdEllatif',
      desc: 'Simple Short Description',
    },
  ];
}
