import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

teamImages: string[] = Array.from({ length: 18 }, (_, i) => `assets/pictures/${i + 1}.webp`);
  currentIndex = 0;
  visibleCount = 6;

  get visibleImages(): string[] {
    return this.teamImages.slice(this.currentIndex, this.currentIndex + this.visibleCount);
  }

  next() {
    if (this.currentIndex < this.teamImages.length - this.visibleCount) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}