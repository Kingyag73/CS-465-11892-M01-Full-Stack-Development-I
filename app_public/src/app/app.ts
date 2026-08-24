import { Component } from '@angular/core';
import { TripList } from './trip-list/trip-list';
import { EditTrip } from './edit-trip/edit-trip';
import { AddTrip } from './add-trip/add-trip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TripList, EditTrip, AddTrip],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Travlr Getaways';
}