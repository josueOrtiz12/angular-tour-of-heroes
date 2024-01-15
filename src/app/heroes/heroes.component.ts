import { Component } from '@angular/core';
import { Hero } from '../interface/hero'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    HeroDetailComponent,
    CommonModule, 
    FormsModule,
    NgFor],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = []
  
  selectedHero? : Hero;
  onSelect(hero : Hero):void{
    this.selectedHero = hero;
  }
  

  constructor(private heroeService : HeroService){

  }

  getHeroes() : void {
    this.heroeService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit()  :void {
    this.getHeroes();
  }
}
