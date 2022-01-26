import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../types/Hero';

@Component({
  selector: 'app-picked-hero-box',
  templateUrl: './picked-hero-box.component.html',
  styleUrls: ['./picked-hero-box.component.css']
})
export class PickedHeroBoxComponent implements OnInit {
  @Input()
  hero!: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
