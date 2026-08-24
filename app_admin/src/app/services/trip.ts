import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Trip {
  _id?: string;
  code: string;
  name: string;
  length: string;
  start: string;
  resort: string;
  price: string;
}

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/api/trips';

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  getTrip(code: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiUrl}/${code}`);
  }

  updateTrip(code: string, trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.apiUrl}/${code}`, trip);
  }

  addTrip(trip: Trip): Observable<Trip> {
  return this.http.post<Trip>(this.apiUrl, trip);
}

deleteTrip(code: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${code}`);
}

}

