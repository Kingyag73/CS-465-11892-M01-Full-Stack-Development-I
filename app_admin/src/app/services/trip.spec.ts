import { TestBed } from '@angular/core/testing';
import { TripService } from './trip';
import { provideHttpClient } from '@angular/common/http';

describe('TripService', () => {
  let service: TripService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ]
    });

    service = TestBed.inject(TripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});