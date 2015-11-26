import {Component, FORM_DIRECTIVES} from 'angular2/angular2';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero} from './hero.model';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css'],
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class HeroDetailComponent {
  hero: Hero;

  constructor(private _heroService: HeroService,
              private _routeParams: RouteParams) {
    let id = parseInt(_routeParams.get('id'), 10);
    this._heroService.getHero(id).then(hero => this.hero = hero);
  }
}
