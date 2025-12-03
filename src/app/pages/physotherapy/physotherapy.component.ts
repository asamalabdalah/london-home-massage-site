import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowItWorksComponent } from '../../components/how-it-works/how-it-works.component';
import{OffersCarouselComponent} from '../../components/offers-carousel/offers-carousel.component';
import{ ServiceCardComponent } from '../../shared/service-card/service-card.component';
import{WorkShowcaseComponent} from '../../components/work-showcase/work-showcase.component';
import{ TeamComponent } from '../../components/team/team.component';
@Component({
  selector: 'app-physotherapy',
  standalone: true,
  imports: [CommonModule, HowItWorksComponent, OffersCarouselComponent, ServiceCardComponent, WorkShowcaseComponent, TeamComponent],
  templateUrl: './physotherapy.component.html',
  styleUrls: ['./physotherapy.component.scss']
})
export class PhysotherapyComponent {
   pageTitle = 'At-home physiotherapy treatments';
  showAll = false;
  treatments = [
    {
      name: 'Physiotherapy consultation and treatment',
      description: 'An assessment of your strength and range of motion, followed by hands-on treatment to ease your symptoms.',
      pressure: 'N/A',
      imageUrl: 'assets/pictures/physiotherapy/physiostartsite.webp',
      price: 74,
      link: '/physiotherapy/consultation'
    }
  ];



  get visibleTreatments() {
    return this.showAll ? this.treatments : this.treatments.slice(0, 6);
  }

  toggleView() {
    this.showAll = !this.showAll;
  }
}
