import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TripData, Trip } from '../trip-data';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})
export class EditTrip {

  trip: Trip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    price: ''
  };

  message = '';

  constructor(private tripData: TripData) {}

  findTrip(): void {
    if (!this.trip.code) {
      this.message = 'Please enter a trip code.';
      return;
    }

    this.tripData.getTrip(this.trip.code).subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.trip = data[0];
          this.message = '';
        } else {
          this.message = 'Trip not found.';
        }
      },
      error: () => {
        this.message = 'Trip not found.';
      }
    });
  }

  updateTrip(): void {
    this.tripData.updateTrip(this.trip.code, this.trip).subscribe({
      next: (updatedTrip) => {
        this.trip = updatedTrip;
        this.message = 'Trip updated successfully!';
      },
      error: (error) => {
        console.error('Error updating trip:', error);
        this.message = 'Error updating trip.';
      }
    });
  }
}
