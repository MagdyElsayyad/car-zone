import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ECats } from '../app-constants';
import { FirebaseService } from '../firebase.service';
import { Car } from '../shared/models/car.model';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.scss']
})
export class AgenciesComponent implements OnInit {

  agencies: Car[] = [];
  constructor(private spinner: NgxSpinnerService,
    private fbService: FirebaseService,
    ) { }
  
  ngOnInit():void
   {
     this.spinner.show();
    
     this.fbService.getData(ECats.CarAgencies).subscribe(res => {
       console.log(res);
       this.agencies = res;
       this.spinner.hide();
     })
  }
}
