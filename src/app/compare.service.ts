import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from './shared/models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  private carList = new BehaviorSubject<Car[] | []>([]);

  constructor() {
    this.getFromLocal();
  }

  addCar(car: Car) {
    if (this.carList.getValue()?.length < 2 && !this.carList.value.find(e => e.productId === car.productId)) {
      this.carList.next([...this.carList.getValue(), car]);
      localStorage.setItem('compare-cars', JSON.stringify(this.carList.value) );
    } else {
      alert('You should remove one car to compare another')
    }
  }

  getCompared(): Observable<Car[]> {
    return this.carList
  }

  getFromLocal() {
    if(localStorage.getItem('compare-cars')){
      this.carList.next(JSON.parse(localStorage.getItem('compare-cars') || ''));
    }
  }

  isInCompare(car: Car): Observable<boolean> {
    return new Observable((sub) => {
      this.carList.subscribe((data) => {
        if (data.find(e => e.productId === car.productId)) {
          sub.next(true);

        } else {
          sub.next(false);

        }

      })
    })
  }

}
