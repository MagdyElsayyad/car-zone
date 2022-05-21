import { Component } from '@angular/core';
import * as AOS from 'aos';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CarZone';

  constructor(private firebaseService: FirebaseService){}
  ngOnInit(): void {
    this.firebaseService.userChanges(true);
    AOS.init()
  }

}
