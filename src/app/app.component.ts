import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink  } from '@angular/router';
import {HeroesComponent } from './heroes/heroes.component'
import { MessagesComponent } from './messages/messages.component'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    
    CommonModule, 
    RouterOutlet , 
    RouterLink,
    HeroesComponent, 
    MessagesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Marvel Heroes';
}
