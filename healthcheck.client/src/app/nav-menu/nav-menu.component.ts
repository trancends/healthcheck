import { Component } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [RouterLink, MatButton, MatIcon, MatToolbar, MatIconButton],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {}
