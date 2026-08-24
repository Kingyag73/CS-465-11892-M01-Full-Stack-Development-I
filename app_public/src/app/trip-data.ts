import { Injectable } from '@angular/core';
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
export class TripData {

  private apiUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  // GET all trips
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  // GET one trip by code
  getTrip(code: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiUrl}/${code}`);
  }

  // POST a new trip
  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiUrl, trip);
  }

  // PUT/update a trip
  updateTrip(code: string, trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.apiUrl}/${code}`, trip);
  }

  // DELETE a trip
  deleteTrip(code: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${code}`);
  }
}