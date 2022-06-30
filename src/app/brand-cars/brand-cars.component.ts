import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CompareService } from '../compare.service';
import { FirebaseService } from '../firebase.service';
import { Car } from '../shared/models/car.model';

@Component({
  selector: 'app-brand-cars',
  templateUrl: './brand-cars.component.html',
  styleUrls: ['./brand-cars.component.scss']
})
export class BrandCarsComponent implements OnInit {

  brand = ''
  cars: Car[] = [];
  constructor(private spinner: NgxSpinnerService,
    private fbService: FirebaseService,
    private route: ActivatedRoute,
    public compareService: CompareService,
    ) { }
  
  ngOnInit():void
   {
     this.brand = this.route.snapshot.params['brand'];
     this.spinner.show();
    
     this.fbService.getDataByBrand(this.brand).subscribe(res => {
       this.cars = res;
       this.spinner.hide();
     })
  }

  addToCompare(car: Car){
    this.compareService.addCar(car);
  }
}
