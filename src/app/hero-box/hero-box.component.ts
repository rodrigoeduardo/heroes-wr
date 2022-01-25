import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero-box',
  templateUrl: './hero-box.component.html',
  styleUrls: ['./hero-box.component.css'],
})
export class HeroBoxComponent implements OnInit {
  herois: any[];

  constructor(private hs: HeroesService) {
    this.herois = [];
  }

  ngOnInit() {
    this.hs.obterHerois().subscribe((res) => {
      this.herois = res;
    });
  }
}
