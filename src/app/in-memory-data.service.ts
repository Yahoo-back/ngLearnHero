import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Nancy' },
      { id: 12, name: 'Jack' },
      { id: 13, name: 'Rose' },
      { id: 14, name: 'Tom' },
      { id: 15, name: 'Jerry'},
      { id: 16, name: 'Jadder' },
      { id: 17, name: 'Pinky' },
      { id: 18, name: 'Andy' },
      { id: 19, name: 'Lisa'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id )) +1 : 10
  }

constructor() { }

}
