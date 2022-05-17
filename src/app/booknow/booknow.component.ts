import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.scss' ,'./css/main.css','./css/bootstrap.min.css','./css/all.min.css','./css/book.css']
})
export class BooknowComponent implements OnInit {

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
