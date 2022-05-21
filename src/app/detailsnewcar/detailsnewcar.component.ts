import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { Car } from '../shared/models/car.model';

@Component({
  selector: 'app-detailsnewcar',
  templateUrl: './detailsnewcar.component.html',
  styleUrls: ['./detailsnewcar.component.scss']
})
export class DetailsnewcarComponent implements OnInit {

  car!:Car ;
  constructor(private activeRoute: ActivatedRoute, private fbService: FirebaseService) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.fbService.getDetailssById(id).subscribe(res => {
      this.car = res;
    })
  }

}
