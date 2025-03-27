import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PizzaAppModule } from './pizza-app/pizza-app.module';

@Component({
  selector: 'app-root',
  imports: [ 
    PizzaAppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pizza-creator';
}
