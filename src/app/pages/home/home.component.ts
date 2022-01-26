import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { Hero } from 'src/app/shared/types/Hero';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  pickedHeroes: Hero[] = [];
  compWinrate: number = 0;

  constructor(private hs: HeroesService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes$ = this.hs.listHeroes();
  }

  pickHero(hero: Hero): void {
    if (!(this.pickedHeroes.length < 5)) return;

    this.pickedHeroes.push(hero);
    this.filterHeroes()
  }

  filterHeroes() {

    this.heroes$ = this.hs.listHeroes().pipe(
      map((heroes) => {
        let filteredHeroes = heroes;

        this.pickedHeroes.forEach(pickedHero => {
          filteredHeroes = filteredHeroes.filter((h) => h.localized_name !== pickedHero.localized_name);
        })

        return filteredHeroes;
      }
    ));
  }

  removeHero(hero: Hero): void {
    this.pickedHeroes = this.pickedHeroes.filter((h) => h !== hero);
    this.filterHeroes()
  }

  calculateWinrate() {
    let totalGames = 0;
    let totalWins = 0;
    this.pickedHeroes.forEach((hero) => {
      totalGames += hero.pro_pick;
      totalWins += hero.pro_win;
    });
    this.compWinrate = (totalWins / totalGames) * 100;
  }
}
