import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  
  constructor(private heroService : HeroService) { 
  }

  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit() {
    this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes).catch(e => console.log(e));
  
  }

  //  getHeroes(): void {
  //   this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  // }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}

