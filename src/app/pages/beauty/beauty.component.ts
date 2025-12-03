import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowItWorksComponent } from '../../components/how-it-works/how-it-works.component';
import{OffersCarouselComponent} from '../../components/offers-carousel/offers-carousel.component';
import{ ServiceCardComponent } from '../../shared/service-card/service-card.component';
import{WorkShowcaseComponent} from '../../components/work-showcase/work-showcase.component';
import{ TeamComponent } from '../../components/team/team.component';
@Component({
  selector: 'app-beauty',
  standalone: true,
  imports: [CommonModule, HowItWorksComponent, OffersCarouselComponent, ServiceCardComponent, WorkShowcaseComponent, TeamComponent],
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.scss']
})
export class BeautyComponent {
  pageTitle = 'Discover Our Beauty Treatments';
  showAll = false;
 
 treatments = [
  {
    name: 'Gel manicure',
    description: 'A high-shine, chip-resistant manicure using gel polish for a flawless finish.',
    pressure: 'N/A',
    imageUrl: 'assets/pictures/beauty/gel-manicure.webp',
    price: 50,
    link: '/beauty/gel-manicure'
  },
  {
    name: 'Gel pedicure',
    description: 'Full intimate waxing for smooth, hair-free skin with long-lasting results.',
    pressure: 'N/A',
    imageUrl: 'assets/pictures/beauty/gel-pedicure.webp',
    price: 74,
    link: '/beauty/hollywood-wax'
  },
  {
    name: 'Hollywood wax',
    description: 'Full intimate waxing for smooth, hair-free skin with long-lasting results.',
    pressure: 'N/A',
    imageUrl: 'assets/pictures/beauty/hollywood-wax.webp',
    price: 74,
    link: '/beauty/hollywood-wax'
  },
  {
    name: 'Gel mani-pedi',
    description: 'Complete gel manicure and pedicure for polished nails and pampered feet.',
    pressure: 'N/A',
    imageUrl: 'assets/pictures/beauty/gel-mani-pedi.webp',
    price: 79,
    link: '/beauty/gel-mani-pedi'
  },
  {
    name: 'Underarm wax',
    description: 'Quick and gentle waxing to remove underarm hair and leave skin silky smooth.',
    pressure: 'N/A',
    imageUrl: 'assets/pictures/beauty/underarm-wax.webp',
    price: 69,
    link: '/beauty/underarm-wax'
  },
  {
    name: 'Brazilian wax',
    description: 'Precision waxing for a clean and smooth bikini area with minimal discomfort.',
    pressure: 'N/A',
    imageUrl: 'assets/pictures/beauty/brazilian-wax.webp',
    price: 85,
    link: '/beauty/brazilian-wax'
  },
  {
    name: 'Deep cleanse facial',
    description: 'A purifying facial that deeply cleanses pores and revitalizes tired skin.',
    pressure: 'N/A',
    imageUrl: 'assets/pictures/beauty/deep-cleanse-facial.webp',
    price: 72,
    link: '/beauty/deep-cleanse-facial'
  },
  {
    name: 'Hydrating facial',
    description: 'A moisture-rich facial designed to plump, soothe, and restore dry skin.',
    pressure: 'N/A',
    imageUrl: 'assets/pictures/beauty/hydrating-facial.webp',
    price: 65,
    link: '/beauty/hydrating-facial'
  },
  {
    name: 'Men\'s facial',
    description: 'Tailored facial for men to cleanse, exfoliate, and refresh the skin.',
    pressure: 'N/A',
    imageUrl: 'assets/pictures/beauty/mens-facial.webp',
    price: 70,
    link: '/beauty/mens-facial'
  },
  {
    name: 'Pregnancy glow facial',
    description: 'A gentle, pregnancy-safe facial that enhances radiance and soothes the skin.',
    pressure: 'N/A',
    imageUrl: 'assets/pictures/beauty/glow-getter-facial.webp',
    price: 140,
    link: '/beauty/pregnancy-glow-facial'
  }
];



  get visibleTreatments() {
    return this.showAll ? this.treatments : this.treatments.slice(0, 6);
  }

  toggleView() {
    this.showAll = !this.showAll;
  }


}
