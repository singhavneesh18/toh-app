import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from '../model/hero';
import { HEROES } from '../model/mock.heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero:any;
  editMode: boolean = false;
  newHero: any = {id: 0, name: ''};

  heroesList: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes=> this.heroesList = heroes);
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.addMessage(`Hero slected: ${hero.name}`);
  }

  updateHero(){
    this.editMode = true;
  }

  saveChanges(selectedHero: Hero) {
    var newLocal = this.heroesList.find(h => h.id == selectedHero.id);
    newLocal = selectedHero;
    this.editMode = false;
  }

  deleteHero(selectedHero: Hero){
    this.heroesList = this.heroesList.filter(item=> item != selectedHero);
    this.selectedHero = null;
  }

  addHero() {
    const localHero = this.heroesList.find(h => h.id == this.newHero.id);
    if(localHero) {
      window.prompt("");
    }else {
      this.heroesList.push(this.newHero);
      this.newHero = null;
    }    
  }

}
