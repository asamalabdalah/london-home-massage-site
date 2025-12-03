import { Routes } from '@angular/router';
import { MassageComponent } from './pages/massage/massage.component';
import { BeautyComponent } from './pages/beauty/beauty.component';
import { PhysotherapyComponent } from './pages/physotherapy/physotherapy.component';
import { HairmenComponent } from './pages/hairmen/hairmen.component';
import { HomeComponent } from './home/home.component';
import { OsteopathyComponent } from './pages/osteopathy/osteopathy.component';
import { GiftsComponent } from './pages/gifts/gifts.component';


export const routes: Routes = [{ path: '', component: HomeComponent },
  { path: 'pages/massage', component: MassageComponent },
  { path: 'pages/beauty', component: BeautyComponent },
  { path: 'pages/physiotherapy', component: PhysotherapyComponent },
  { path: 'pages/men-haircut', component: HairmenComponent },
  { path: 'pages/osteopathy', component: OsteopathyComponent },
  { path: 'pages/gifts', component: GiftsComponent }
];
