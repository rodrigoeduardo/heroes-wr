import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'https://api.opendota.com/api/heroStats';
  }

  obterHerois(): Observable<any> {
    return this.http.get<any>(this.URL);
  }
}
