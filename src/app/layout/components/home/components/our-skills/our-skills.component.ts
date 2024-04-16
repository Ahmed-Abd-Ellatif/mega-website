import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-skills.component.html',
  styleUrls: ['./our-skills.component.scss'],
})
export class OurSkillsComponent {
  skills = [
    {
      skillName: 'HTML',
      progress: '80%',
      progressStyle: 'width: 80%',
    },
    {
      skillName: 'CSS',
      progress: '85%',
      progressStyle: 'width: 85%',
    },
    {
      skillName: 'Javascript',
      progress: '90%',
      progressStyle: 'width: 90%',
    },
    {
      skillName: 'Angular',
      progress: '95%',
      progressStyle: 'width: 95%',
    },
  ];
}
