import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroService} from './hero.service';
import {Hero} from './hero.model';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
  styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private _heroService: HeroService, private _router: Router) {
    _heroService.getHeroes().then((resp) => this.heroes = resp);
  }

  gotoDetail() {
    this._router.navigate(['/Detail', {id: this.selectedHero.id}]);
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
