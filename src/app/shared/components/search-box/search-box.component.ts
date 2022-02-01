import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  public name: string;

  @Output()
  onHeroSearched = new EventEmitter<string>();

  constructor() {
    this.name='';
  }

  ngOnInit() {}

  searchForHero(value: string){
    this.onHeroSearched.emit(value);
  }
}
