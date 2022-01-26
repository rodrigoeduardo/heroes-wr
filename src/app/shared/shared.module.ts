import { NgModule } from '@angular/core';
import { HeroBoxComponent } from './components/hero-box/hero-box.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HeroesService } from './services/heroes.service';
import { PickedHeroBoxComponent } from './components/picked-hero-box/picked-hero-box.component';

@NgModule({
  imports: [],
  declarations: [HeroBoxComponent, SearchBoxComponent, PickedHeroBoxComponent],
  exports: [HeroBoxComponent, SearchBoxComponent, PickedHeroBoxComponent],
  providers: [HeroesService],
})
export class SharedModule {}
