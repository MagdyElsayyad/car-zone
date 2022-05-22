import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
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
    public afAuth: AngularFireAuth,
    private spinner: NgxSpinnerService,
    ) {}

  canActivate( 
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      this.spinner.show();
      return new Observable((sub) => {
        
        this.afAuth.authState.subscribe((usr) => {
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
