import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}

export class Hero {
  constructor(public id: number,
              public name: string) {};
}

const HEROES: Hero[] = [
  new Hero(11, 'Mr. Nice'),
  new Hero(13, 'Narco'),
  new Hero(14, 'Bombasto'),
  new Hero(15, 'Celeritas'),
  { 'id': 16, 'name': 'Magneta'},
  { 'id': 17, 'name': 'RubberMan'},
  { 'id': 18, 'name': 'Dr IQ'},
  { 'id': 19, 'name': 'Magma'},
  { 'id': 20, 'name': 'Tornado'}
];
