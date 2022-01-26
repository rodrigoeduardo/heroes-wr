import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output()
  onPickHero = new EventEmitter<Hero>();

  constructor() {}

  ngOnInit() {}

  pickThisHero() {
    this.onPickHero.emit(this.hero);
  }
}
