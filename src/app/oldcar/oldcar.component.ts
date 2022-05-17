import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-oldcar',
  templateUrl: './oldcar.component.html',
  styleUrls: ['./oldcar.component.scss']
})
export class OldcarComponent implements OnInit {

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
