import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../types/Hero';

@Component({
  selector: 'app-hero-box',
  templateUrl: './hero-box.component.html',
  styleUrls: ['./hero-box.component.css'],
})
export class HeroBoxComponent implements OnInit {
  @Input()
  hero!: Hero;

  constructor() {}

  ngOnInit() {}

  wr() {
    console.log('oi');
  }
}
