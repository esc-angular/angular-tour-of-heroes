import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../model/hero';

@Injectable()
export class HeroService {

  constructor() { }

  // getHeroes(): Hero[] {
  //   //
  //   return HEROES;
  // }

  getHeroes(): Promise<Hero[]> {
    let a = 1/0;
    console.log("a: " + a);
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
