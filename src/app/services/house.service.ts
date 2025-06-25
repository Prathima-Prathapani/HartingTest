import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface House {
  url: string;
  name: string;
  region: string;
  words: string;
  titles: string[];
  seats: string[];
  founded: string;
  overlord: string;
  currentLord: string;
}

@Injectable({ providedIn: 'root' })
export class HouseService {
  private readonly api = 'https://anapioficeandfire.com/api/houses';

  constructor(private http: HttpClient) {}

 
  getHouseData(page = 1, pageSize = 20): Observable<House[]> {
    const params = new HttpParams()
      .set('page', page)
      .set('pageSize', pageSize);
    return this.http.get<House[]>(this.api, { params });
  }
   getHouseById(id: string): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`);
  }
  
  static idFromUrl(url: string): number {
    return +url.split('/').pop()!;
  }
}
