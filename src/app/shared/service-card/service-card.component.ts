import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
   @Input() name!: string;
  @Input() description!: string;
  @Input() pressure!: string;
  @Input() imageUrl!: string;
  @Input() price!: number;
  @Input() link!: string;



}
