import { Component, Input, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../types/Hero';

@Component({
  selector: 'app-hero-box',
  templateUrl: './hero-box.component.html',
})
export class HeroBoxComponent implements OnInit {
  @Input()
  hero!: Hero;

  constructor() {}

  ngOnInit() {}
}
