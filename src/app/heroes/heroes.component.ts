import { Component } from '@angular/core';
import { Hero } from '../interface/hero'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    NgFor],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;
  
  selectedHero? : Hero;
  onSelect(hero : Hero):void{
    this.selectedHero = hero;
  }
}
