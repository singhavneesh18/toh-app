import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from './model/hero';
import { HEROES } from './model/mock.heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage(`Fetch list of heroes`);
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.addMessage(`Fetch hero id: ${id}`);
    return of(<Hero>HEROES.find(hero => hero.id === id));
  }
}
