import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app',() => {
    const comp = TestBed.createComponent(AppComponent);
    const inst = comp.componentInstance;
    expect(inst).toBeTruthy();
  });

  it(`should have title with default value 'Tour of heroes app'`, ()=> {
    const comp = TestBed.createComponent(AppComponent);
    const inst = comp.componentInstance;
    expect(inst.title).toEqual('Tour of heroes app');
  });

  it('should render title on template', ()=> {
    const comp = TestBed.createComponent(AppComponent);
    comp.detectChanges();
    const htmlElements = comp.nativeElement;
    expect(htmlElements.querySelector('div').textContent).toEqual('Tour of heroes app');
  });
});
