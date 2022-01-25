import { NgModule } from '@angular/core';
import { HeroBoxComponent } from './components/hero-box/hero-box.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HeroesService } from './services/heroes.service';

@NgModule({
  imports: [],
  declarations: [HeroBoxComponent, SearchBoxComponent],
  exports: [HeroBoxComponent, SearchBoxComponent],
  providers: [HeroesService],
})
export class SharedModule {}
