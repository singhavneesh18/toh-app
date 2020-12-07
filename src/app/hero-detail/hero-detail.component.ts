import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges, OnDestroy
  ,AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit
{

  selectedHero: any;
  counter:number = 0;
  buttonDiabled = true;

  constructor(private activatedRoute: ActivatedRoute, private heroService : HeroService) {
    this.logIt('constructor called');
   }

  ngOnInit(): void {
    this.getHero();
    this.logIt('Init called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.counter++;
    this.logIt(`Called ngOnchanges times: ${this.selectedHero}`);
  }

  ngOnDestroy() { this.logIt(`onDestroy`); }

  ngDoCheck(changes: SimpleChanges) {
    this.logIt(`ngDoCheck ${changes}`);
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.logIt(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
    
  }

  ngAfterContentInit(){
    this.logIt(`ngAfterContentInit`);
  }

  ngAfterContentChecked()	{
    this.logIt(`ngAfterContentChecked`);
  }

  ngAfterViewInit()	{
    this.logIt(`ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    this.logIt(`ngAfterViewChecked`);
  }

  private logIt(msg: string) {
    // console.log(`Spy #${this.counter++} ${msg}`);
  }

  getHero() {
    const temp = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(temp);
    const id = temp ? +temp: 0;
    // this.heroService.getHero(id).subscribe(hero=> this.selectedHero = hero);
    this.heroService.getHero(id).subscribe({
      next(response){
        
      },
      error(error) {
        console.log(`Error response ${error}`);
      },
      complete(){
        // console.log('Completed');
      }
      
    });

    
    this.heroService.getHero(id).subscribe(hero=> this.selectedHero = hero);
  }

}
