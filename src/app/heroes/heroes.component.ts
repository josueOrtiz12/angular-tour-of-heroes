import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'
import { HeroService } from '../hero.service';
import { MessageService } from '../messages/message.service'


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
export class HeroesComponent implements OnInit{

  selectedHero? : Hero;

  heroes: Hero[] = []
  

  constructor(private heroeService : HeroService , private messageService : MessageService){

  }

  ngOnInit()  :void {
    this.getHeroes();
  }
 
  onSelect(hero : Hero):void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected Hero id=${hero.id}`);
  }
  

  getHeroes() : void {
    this.heroeService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

 
}
