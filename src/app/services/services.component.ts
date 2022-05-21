import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ECats } from '../app-constants';
import { FirebaseService } from '../firebase.service';
import { Car } from '../shared/models/car.model';

export interface Service {

}
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Car[] = [];
  constructor(private spinner: NgxSpinnerService,
    private fbService: FirebaseService,
    ) { }
  
  ngOnInit():void
   {
     this.spinner.show();
    
     this.fbService.getData(ECats.CarService).subscribe(res => {
       console.log(res);
       this.services = res;
       this.spinner.hide();
     })
  }


}
