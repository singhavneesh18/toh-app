import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'hero/:id', component: HeroDetailComponent}
  // ,{path: '**', component: PageNotFoundComponent} // For other urls
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
