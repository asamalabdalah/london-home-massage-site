import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowItWorksComponent } from '../../components/how-it-works/how-it-works.component';
import{OffersCarouselComponent} from '../../components/offers-carousel/offers-carousel.component';
import{ ServiceCardComponent } from '../../shared/service-card/service-card.component';
import{WorkShowcaseComponent} from '../../components/work-showcase/work-showcase.component';
import{ TeamComponent } from '../../components/team/team.component';
@Component({
  selector: 'app-massage',
  standalone: true,
  imports: [CommonModule, HowItWorksComponent, OffersCarouselComponent, ServiceCardComponent, WorkShowcaseComponent, TeamComponent],
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.scss']
})
export class MassageComponent {
  pageTitle = 'Discover Our Massage Treatments';
  showAll = false;
  treatments = [
    {
      name: 'Deep tissue massage',
      description: 'A strong massage to release tension like lower back and shoulder pain.',
      pressure: 'Strong pressure',
      imageUrl: 'assets/pictures/deep-massage.avif',
      price: 74,
      link: '/massage/deep-tissue'
    },
    {
      name: 'Relaxing massage',
      description: 'Gentle massage to reduce stress and improve sleep.',
      pressure: 'Light pressure',
      imageUrl: 'assets/pictures/deep-massage.avif',
      price: 74,
      link: '/massage/relaxing'
    },
    {
      name: 'Sports massage',
      description: 'Great for injury prevention and recovery.',
      pressure: 'Medium pressure',
      imageUrl: 'assets/pictures/deep-massage.avif',
      price: 79,
      link: '/massage/sports'
    },
    {
      name: 'Prenatal massage',
      description: 'Tailored for pregnant women to relieve discomfort.',
      pressure: 'Gentle pressure',
      imageUrl: 'assets/pictures/deep-massage.avif',
      price: 69,
      link: '/massage/prenatal'
    },
    {
      name: 'Thai massage',
      description: 'Stretching-based massage to improve flexibility.',
      pressure: 'Firm pressure',
      imageUrl: 'assets/pictures/deep-massage.avif',
      price: 85,
      link: '/massage/thai'
    },
    {
      name: 'Aromatherapy massage',
      description: 'Uses essential oils to enhance relaxation.',
      pressure: 'Light pressure',
      imageUrl: 'assets/pictures/deep-massage.avif',
      price: 72,
      link: '/massage/aroma'
    },
    {
      name: 'Hot stone massage',
      description: 'Heated stones to melt away tension.',
      pressure: 'Medium pressure',
      imageUrl: 'assets/pictures/deep-massage.avif',
      price: 78,
      link: '/massage/hot-stone'
    },
    {
      name: 'Reflexology',
      description: 'Focuses on pressure points in the feet.',
      pressure: 'Targeted pressure',
      imageUrl: 'assets/pictures/deep-massage.avif',
      price: 65,
      link: '/massage/reflexology'
    },
    {
      name: 'Lymphatic drainage',
      description: 'Gentle massage to boost circulation and detox.',
      pressure: 'Very light pressure',
      imageUrl: 'assets/pictures/deep-massage.avif',
      price: 70,
      link: '/massage/lymphatic'
    },
    {
      name: 'Couples massage',
      description: 'Relax together with synchronized treatments.',
      pressure: 'Custom pressure',
      imageUrl: 'assets/pictures/deep-massage.avif',
      price: 140,
      link: '/massage/couples'
    }
  ];



  get visibleTreatments() {
    return this.showAll ? this.treatments : this.treatments.slice(0, 6);
  }

  toggleView() {
    this.showAll = !this.showAll;
  }


}
