import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
// import the auth service
import { FirebaseService } from '../firebase.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private firebaseService: FirebaseService, private router: Router) {}

  canActivate( 
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return new Observable((sub) => {

        this.firebaseService.currentUser.subscribe((usr) => {
          const currentUser = usr;
          if (currentUser) {
            sub.next(true)
          }
          sub.next(false)
        })
      })

  }
}
