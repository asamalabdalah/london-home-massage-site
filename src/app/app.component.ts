import { Component } from '@angular/core';
import { RouterOutlet, RouterModule  } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
//import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss'] 
})
export class AppComponent {
  title = 'london-home-massage';
}
