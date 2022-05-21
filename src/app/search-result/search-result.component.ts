import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FirebaseService } from '../firebase.service';
import { Car } from '../shared/models/car.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searchText = '';
  searchResult: Car[] = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private fbService: FirebaseService) { }
  
  ngOnInit():void
   {
     const q = this.activeRoute.snapshot.params['q']
    this.getAll();
    this.searchText = q;
  }

  getAll(){
      this.spinner.show();
      this.fbService.getAll().subscribe(res => {
        this.searchResult = res;
        console.log(res);
        this.spinner.hide();
      })
    
  }
}
