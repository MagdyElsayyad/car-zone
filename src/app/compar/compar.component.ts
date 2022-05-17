import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-compar',
  templateUrl: './compar.component.html',
  styleUrls: ['./compar.component.scss' ,'./css/main.css','./css/bootstrap.min.css','./css/all.min.css','./css/compare.css']
})
export class ComparComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,) { }

   
  ngOnInit():void
   {
     this.spinner.show();

    setTimeout(() => {
   /** spinner ends after 5 seconds */
    this.spinner.hide();
      }, 1000);

  }


}
