import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { Hero } from '../../types/Hero';

@Component({
  selector: 'app-hero-box',
  templateUrl: './hero-box.component.html',
  styleUrls: ['./hero-box.component.css'],
})
export class HeroBoxComponent implements OnInit {
  @Input()
  hero!: Hero;

  constructor(private hc: HomeComponent) {}

  ngOnInit() {}

  pickThisHero() {
    if (this.hc.pickedHeroes.length < 5) {
      this.hc.pickedHeroes.push(this.hero);
    }
  }
}
