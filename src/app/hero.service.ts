import { Injectable } from '@angular/core';
import { Hero } from './interface/hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // getHeroes(): Hero[]{
  //   return HEROES
  // }

  constructor(private messageService : MessageService) { }
  
  getHeroes() : Observable<Hero[]> { 
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

 
}
