import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { TripService, Trip } from '../services/trip';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin implements OnInit {

  deleteTrip(trip: Trip): void {
  const confirmed = confirm(
    `Are you sure you want to delete ${trip.name}?`
  );

  if (!confirmed) {
    return;
  }

  this.tripService.deleteTrip(trip.code).subscribe({
    next: () => {
      console.log('Trip deleted:', trip.code);

      this.trips = this.trips.filter(
        existingTrip => existingTrip.code !== trip.code
      );

      this.cdr.detectChanges();
    },
    error: (error) => {
      console.error('Error deleting trip:', error);
    }
  });
}

  startAddTrip(): void {
  this.addingTrip = true;
  this.editingTrip = null;

  this.newTrip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    price: ''
  };

  this.cdr.detectChanges();
}

cancelAddTrip(): void {
  this.addingTrip = false;
}

addTrip(): void {
  this.tripService.addTrip(this.newTrip).subscribe({
    next: (createdTrip) => {
      console.log('Trip added:', createdTrip);

      this.trips.push(createdTrip);

      this.addingTrip = false;

      this.cdr.detectChanges();
    },
    error: (error) => {
      console.error('Error adding trip:', error);
    }
  });
}

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }

  private tripService = inject(TripService);
  private cdr = inject(ChangeDetectorRef);

  trips: Trip[] = [];
  editingTrip: Trip | null = null;

  addingTrip = false;

newTrip: Trip = {
  code: '',
  name: '',
  length: '',
  start: '',
  resort: '',
  price: ''
};

  ngOnInit(): void {
    this.loadTrips();
  }
  

  loadTrips(): void {
    this.tripService.getTrips().subscribe({
      next: (data) => {
        console.log('ADMIN TRIPS LOADED:', data);

        this.trips = data;

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('ADMIN ERROR:', error);
      }
    });
  }

  editTrip(trip: Trip): void {
    this.editingTrip = { ...trip };

    this.cdr.detectChanges();
  }

  cancelEdit(): void {
    this.editingTrip = null;

    this.cdr.detectChanges();
  }

  saveTrip(): void {
    if (!this.editingTrip) {
      return;
    }

    this.tripService
      .updateTrip(this.editingTrip.code, this.editingTrip)
      .subscribe({
        next: (updatedTrip) => {

          const index = this.trips.findIndex(
            trip => trip.code === updatedTrip.code
          );

          if (index !== -1) {
            this.trips[index] = updatedTrip;
          }

          this.editingTrip = null;

          console.log('Trip updated:', updatedTrip);

          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error updating trip:', error);
        }
      });
  }
}