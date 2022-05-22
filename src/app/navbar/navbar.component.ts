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
 
    


  }

  isLogOut()
  {
    this.fbService.SignOut();
  }


  ngOnInit(): void {
    this.fbService.isAuth.subscribe((logged)=>{
      if(logged)
      {
        this.isLogin=true;
      }
      else
      {
        this.isLogin=false;

      }

    })
  }

}
