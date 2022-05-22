import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
// import the auth service
import { FirebaseService } from '../firebase.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private firebaseService: FirebaseService, 
    private router: Router,
    private spinner: NgxSpinnerService,
    ) {}

  canActivate( 
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      this.spinner.show();
      return new Observable((sub) => {
        
        this.firebaseService.currentUser.subscribe((usr) => {
          const currentUser = usr;
          this.spinner.hide();
          if (currentUser) {
            sub.next(true);
          }else{
            sub.next(false);
          }
        })
      })

  }
}
