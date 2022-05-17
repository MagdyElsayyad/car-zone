import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','./css/main.css','./css/bootstrap.min.css','./css/all.min.css','./css/home.css']
})
export class HomeComponent implements OnInit {
  trendingMovies:any[] = [];
  trendingTv:any[] = [];
  trendingPeople:any[] = [];

  imgPrefix:string= 'https://image.tmdb.org/t/p/w500/'
  constructor(private _MoviesService:MoviesService , private spinner: NgxSpinnerService,) {
    _MoviesService.getTrending('movie').subscribe((response)=>{
      this.trendingMovies =response.results.slice(0,10);
    })
    _MoviesService.getTrending('tv').subscribe((response)=>{
      this.trendingTv =response.results.slice(0,10);
    })
    _MoviesService.getTrending('person').subscribe((response)=>{
      this.trendingPeople =response.results.slice(0,10);
    })
   }

 
 
 

 
   ngOnInit():void
   {
     this.spinner.show();

    setTimeout(() => {
   /** spinner ends after 5 seconds */
    this.spinner.hide();
      }, 1000);

  }
}
