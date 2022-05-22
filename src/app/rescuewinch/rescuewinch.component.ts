import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ECats } from '../app-constants';
import { FirebaseService } from '../firebase.service';
import { Car } from '../shared/models/car.model';

@Component({
  selector: 'app-rescuewinch',
  templateUrl: './rescuewinch.component.html',
  styleUrls: ['./rescuewinch.component.scss']
})
export class RescuewinchComponent implements OnInit {

  rescuewinches: Car[] = [];
  constructor(private spinner: NgxSpinnerService,private fbService: FirebaseService) { }
  
  ngOnInit():void
   {
     this.spinner.show();

     this.fbService.getData(ECats.RescueWinch).subscribe(res => {
       this.rescuewinches = res;
       
       this.spinner.hide();
     })
  }

}
