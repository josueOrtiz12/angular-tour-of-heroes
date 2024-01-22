import {Component, Input} from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from '../interface/hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService} from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    NgIf,
    UpperCasePipe,
    FormsModule,
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

@Input() hero?:Hero  


constructor(
  private route : ActivatedRoute,
  private heroService : HeroService,
  private location : Location
){}

ngOnit():void{
  this.getHero();
}

getHero(): void {
  const id= Number(this.route.snapshot.paramMap.get('id'));
  this.heroService.getHero(id).subscribe(hero => this.hero = hero);
}
goBack(): void {
  this.location.back();
}

}
