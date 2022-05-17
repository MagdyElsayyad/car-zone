import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

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
