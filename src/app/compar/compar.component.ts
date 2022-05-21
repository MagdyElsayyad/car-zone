import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { CompareService } from '../compare.service';
import { Car } from '../shared/models/car.model';

@Component({
  selector: 'app-compar',
  templateUrl: './compar.component.html',
  styleUrls: ['./compar.component.scss' ,'./css/main.css','./css/bootstrap.min.css','./css/all.min.css','./css/compare.css']
})
export class ComparComponent implements OnInit {
  compareCars: Car[] = [];
  constructor(private spinner: NgxSpinnerService,    public cmprService: CompareService,) { }

   
  ngOnInit():void
   {
    this.cmprService.getCompared().subscribe(res => {
      this.compareCars = res;
    });
     this.spinner.show();

    setTimeout(() => {
   /** spinner ends after 5 seconds */
    this.spinner.hide();
      }, 1000);

  }


}
