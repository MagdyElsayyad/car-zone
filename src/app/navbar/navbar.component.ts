import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean =false;
  constructor(private fbService:FirebaseService) {
 
    fbService.currentUser.subscribe((user)=>{
      if(fbService.currentUser.getValue() != null)
      {
        this.isLogin=true;
      }
      else
      {
        this.isLogin=false;

      }

    })


  }

  isLogOut()
  {
    this.fbService.SignOut();
  }


  ngOnInit(): void {
  }

}
