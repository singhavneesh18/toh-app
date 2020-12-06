import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  selectedHero: any;

  constructor(private activatedRoute: ActivatedRoute, private heroService : HeroService) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const temp = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(temp);
    const id = temp ? +temp: 0;
    this.heroService.getHero(id).subscribe(hero=> this.selectedHero = hero);

  }

}
