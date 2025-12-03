import { Component, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
   imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) {}
reviews: { stars: string; text: string }[] = [
  { stars: '★★★★★', text: 'Absolutely amazing!' }, { stars: '★★★★☆', text: 'Excellent service.' },
    { stars: '★★★★★', text: 'Highly recommend.' },
    { stars: '★★★☆☆', text: 'Good, but could be improved.' },
    { stars: '★★★★★', text: 'The best experience I\'ve ever had.' },
    { stars: '★★★★☆', text: 'Fast and efficient.' },
    { stars: '★★★★☆', text: 'Excellent service.' }
  ];

  currentIndex = 0;
  itemsPerPage = 3;
visibleReviews: { stars: string; text: string }[] = [];




  @HostListener('window:resize')
  onResize() {
    this.updateItemsPerPage();
    this.updateVisibleReviews();
  }

updateItemsPerPage() {
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    if (width < 600) {
      this.itemsPerPage = 1;
    } else if (width < 900) {
      this.itemsPerPage = 2;
    } else {
      this.itemsPerPage = 3;
    }
  } else {
    // بيئة SSR: استخدم قيمة افتراضية
    this.itemsPerPage = 3;
  }
}
  ngAfterViewInit(): void {
    this.updateItemsPerPage();
    this.updateVisibleReviews();
    this.cdr.detectChanges(); // ✅ يحل المشكلة
  }


  updateVisibleReviews() {
    this.updateItemsPerPage();
    this.visibleReviews = this.reviews.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  scrollLeft() {
    if (this.currentIndex - this.itemsPerPage >= 0) {
      this.currentIndex -= this.itemsPerPage;
      this.updateVisibleReviews();
    }
  }

  scrollRight() {
    if (this.currentIndex + this.itemsPerPage < this.reviews.length) {
      this.currentIndex += this.itemsPerPage;
      this.updateVisibleReviews();
    }
  }
}
