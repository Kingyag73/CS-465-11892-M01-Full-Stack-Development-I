import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TripData, Trip } from '../trip-data';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-trip.html',
  styleUrl: './add-trip.css'
})
export class AddTrip {

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

  addTrip(): void {
    this.tripData.addTrip(this.trip).subscribe({
      next: (savedTrip) => {
        this.message = 'Trip added successfully!';

        this.trip = {
          code: '',
          name: '',
          length: '',
          start: '',
          resort: '',
          price: ''
        };
      },
      error: (error) => {
        console.error('Error adding trip:', error);
        this.message = 'Error adding trip.';
      }
    });
  }
}
