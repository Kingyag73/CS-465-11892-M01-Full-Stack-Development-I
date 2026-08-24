import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TripData, Trip } from '../trip-data';
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [TripCard],
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.css'
})
export class TripList implements OnInit {

  trips: Trip[] = [];

  constructor(
    private tripData: TripData,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips(): void {
    this.tripData.getTrips().subscribe({
      next: (data) => {
        this.trips = data;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error loading trips:', error);
      }
    });
  }
}