import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { Hero } from 'src/app/shared/types/Hero';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  heroes$!: Observable<Hero[]>;

  constructor(private hs: HeroesService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes$ = this.hs.listHeroes();
  }
}
