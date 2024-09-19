import { Component } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavMenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'HealthCheck';
}
