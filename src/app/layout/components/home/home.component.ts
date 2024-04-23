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
import { EventsComponent } from './components/events/events.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TopVideosComponent } from './components/top-videos/top-videos.component';
import { StatsComponent } from './components/stats/stats.component';

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
    EventsComponent,
    PricingComponent,
    TopVideosComponent,
    StatsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
