import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from './model/hero';
import { HEROES } from './model/mock.heroes';
import { HttpClient} from '@angular/common/http';
import { DataObject, DataObjectList } from './model/reqres';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  dataObjects: DataObject[] = [];
  

  constructor(private messageService: MessageService, 
    private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage(`Fetch list of heroes`);
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.getHeroFromReqres(id).subscribe(data=> this.dataObjects.push(data));
    // this.getHeroListFromReqres().subscribe(dataArray=> this.dataObjects.concat(dataArray));
    // console.log(this.dataObjects);
    this.messageService.addMessage(`Fetch hero id: ${id}`);
    var hero = <Hero>HEROES.find(hero => hero.id === id);
    const subscription = interval(10000).subscribe(n=> {
      // hero.name= hero.name+n;
      console.log(`It's been ${n + 1} seconds since subscribing!`)
    });
    
    
    return of(hero);
  }

  getHeroFromReqres(id: number): Observable<DataObject> {
    return this.httpClient.get<DataObject>("https://reqres.in/api/users/2?delay=3");
  }

  getHeroListFromReqres(): Observable<DataObjectList> {
    return this.httpClient.get<DataObjectList>("https://reqres.in/api/users");
  }


}
