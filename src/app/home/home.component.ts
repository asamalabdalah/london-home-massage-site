import { Component } from '@angular/core';
import {HeaderComponent} from '../components/header/header.component';
import {OffersCarouselComponent} from '../components/offers-carousel/offers-carousel.component';
import {HeroBannerComponent} from '../components/hero-banner/hero-banner.component';
import {WorkShowcaseComponent} from '../components/work-showcase/work-showcase.component';
import {HowItWorksComponent} from '../components/how-it-works/how-it-works.component';
import {TestimonialsComponent} from '../components/testimonials/testimonials.component';
import {DownloadAppComponent} from '../components/download-app/download-app.component';
import {SafetyInfoComponent} from '../components/safety-info/safety-info.component';
import {FeaturedServicesComponent} from '../components/featured-services/featured-services.component';
import { FooterComponent } from '../components/footer/footer.component';
import{TeamComponent} from '../components/team/team.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, OffersCarouselComponent, HeroBannerComponent, WorkShowcaseComponent, HowItWorksComponent, TestimonialsComponent, DownloadAppComponent, SafetyInfoComponent, FeaturedServicesComponent, TeamComponent, FooterComponent],

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 showCarousel = true;
 hideCarousel() {
  this.showCarousel = false;
}

}
