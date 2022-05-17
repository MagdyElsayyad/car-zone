import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.scss']
})
export class SellingComponent implements OnInit {

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
