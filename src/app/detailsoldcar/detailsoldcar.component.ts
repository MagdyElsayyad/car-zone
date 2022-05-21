import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { Car } from '../shared/models/car.model';

@Component({
  selector: 'app-detailsoldcar',
  templateUrl: './detailsoldcar.component.html',
  styleUrls: ['./detailsoldcar.component.scss']
})
export class DetailsoldcarComponent implements OnInit {
  car!:Car ;
  constructor(private activeRoute: ActivatedRoute, private fbService: FirebaseService) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.fbService.getCarsById(id).subscribe(res => {
      this.car = res;
      console.log(this.car);
    })
  }

}
