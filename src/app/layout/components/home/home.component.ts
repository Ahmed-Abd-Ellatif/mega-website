import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FeaturesComponent } from './components/features/features.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { OurSkillsComponent } from './components/our-skills/our-skills.component';
import { HowToWorkComponent } from './components/how-to-work/how-to-work.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ArticlesComponent,
    GalleryComponent,
    FeaturesComponent,
    TestimonialsComponent,
    TeamMembersComponent,
    ServicesSectionComponent,
    OurSkillsComponent,
    HowToWorkComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
