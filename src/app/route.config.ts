import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {RouteDefinition} from 'angular2/router';

export const APP_ROUTES : RouteDefinition[] = [
  {path: '/', as: 'Dashboard', component: DashboardComponent},
  {path: '/heroes', as: 'Heroes', component: HeroesComponent},
  {path: '/detail/:id', as: 'Detail', component: HeroDetailComponent}
];
