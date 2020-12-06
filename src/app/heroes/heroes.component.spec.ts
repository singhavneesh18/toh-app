import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have hero property with id: 1', ()=> {
    expect(component.hero.id).toEqual(1);
  });

  it('should have hero propert with name: Avneesh', ()=> {
    expect(component.hero.name).toEqual('Avneesh');
  });

  it('should have title as hero page',() => {
    const content = <string>fixture.nativeElement.querySelector('.title').textContent;
    console.log(content);
    expect(content).toEqual('Hero Page');
  });

  it('should have hero id',() => {
    const data = <string>fixture.nativeElement.querySelector('div p span').innerHTML;
    console.log('==============' +data);
    expect(data).toContain('Hero id:')
  });

});
