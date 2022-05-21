import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ECats } from '../app-constants';
import { CompareService } from '../compare.service';
import { FirebaseService } from '../firebase.service';
import { Car } from '../shared/models/car.model';

@Component({
  selector: 'app-oldcar',
  templateUrl: './oldcar.component.html',
  styleUrls: ['./oldcar.component.scss']
})
export class OldcarComponent implements OnInit {

  cars: Car[] = [];
  constructor(private spinner: NgxSpinnerService, public compareService: CompareService,private fbService: FirebaseService) { }
  
  ngOnInit():void
   {
     this.spinner.show();

     this.fbService.getData(ECats.OldCar).subscribe(res => {
       this.cars = res;
       this.spinner.hide();
     })
  }
  addToCompare(car: Car){
    this.compareService.addCar(car);
  }
}
