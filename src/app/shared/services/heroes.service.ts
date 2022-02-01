import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../types/Hero';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private URL = `${environment.api}/heroStats`;

  constructor(private http: HttpClient) {}

  listHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.URL);
  }

  
}
