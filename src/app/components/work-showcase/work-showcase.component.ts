import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../shared/safe-url.pipe';

@Component({
  selector: 'app-work-showcase',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './work-showcase.component.html',
  styleUrl: './work-showcase.component.scss'
})
export class WorkShowcaseComponent {
  @Input() videoSrc: string = '';

/* videos = [
  {
    title: 'Shoulder Massage Therapy',
    employee: 'Megan',
    type: 'embed',
    embedUrl: 'https://www.youtube.com/embed/d67_GULux3k'
  },
  {
    title: 'Elegant Hair Waves',
    employee: 'Stephanie',
    type: 'embed',
    embedUrl: 'https://www.youtube.com/embed/AOnlejssy34'
  },
  {
    title: 'Bathroom Deep Clean',
    employee: 'Mom.at.home21',
    type: 'embed',
    embedUrl: 'https://www.youtube.com/embed/MPCxpRB45-s'
  },
  {
    title: 'Local Massage Demo',
    employee: 'Megan',
    type: 'local',
    url: 'https://yourserver.com/videos/massage1.mp4'
  },
  {
    title: 'Hair Styling Tutorial',
    employee: 'Stephanie',
    type: 'local',
    url: 'https://yourserver.com/videos/hairwaves.mp4'
  },
  {
    title: 'Hair Styling Tutorial',
    employee: 'Stephanie',
    type: 'local',
    url: 'https://yourserver.com/videos/hairwaves.mp4'
  }
]; */





}
