import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { TripService, Trip } from '../services/trip';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  private tripService = inject(TripService);
  private cdr = inject(ChangeDetectorRef);

  trips: Trip[] = [];

  ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips(): void {
    this.tripService.getTrips().subscribe({
      next: (data) => {
        console.log('HOME TRIPS LOADED:', data);

        this.trips = data;

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('HOME ERROR:', error);
      }
    });
  }
}