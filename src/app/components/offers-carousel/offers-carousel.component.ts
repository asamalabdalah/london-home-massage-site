import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-offers-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offers-carousel.component.html',
  styleUrls: ['./offers-carousel.component.scss']
})
export class OffersCarouselComponent {
  constructor(private router: Router) {}
   @Input() title: string = 'Discover Our Exclusive Deals';
  @Input() description: string = 'Relax, refresh, and renew with our premium services';
  @Input() imageUrl: string = 'assets/pictures/massage.webp';
  @Input() buttonText: string = 'See more';

  @Input() link: string = '/offers';

  goToOffers() {
     this.router.navigateByUrl(this.link);
  }
}