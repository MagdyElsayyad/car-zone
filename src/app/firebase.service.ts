import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './core/user';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  userData: any; // Save logged in user data
  currentUser = new BehaviorSubject<firebase.User | null>(null);
  
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '');
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user') || '');
      }
      this.userChanges();
    });
  }
  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.userChanges(true);
        if(result.user){
          this.router.navigate(['/home']);
        }
      })
      .catch((error) => {
        window.alert(error.message);
        this.router.navigate(['/login']);
      });
  }
  // Sign up with email/password
  SignUp(user: User) {
    return this.afAuth
      .createUserWithEmailAndPassword(user?.email || '', user.password || '')
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData({...user,uid: result.user?.uid, id: result.user?.uid, emailVerified: result.user?.emailVerified});
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.error(error);
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['/home']);
      });
  }

  userChanges(withRedirect = false) {
    this.afAuth.onAuthStateChanged(currentUser => {
      if (currentUser?.toJSON()) {
        this.afs.collection('users').ref.where('email', '==', currentUser.email).onSnapshot(snap => {
          snap.forEach(userRef => {
            this.currentUser.next(userRef.data() as firebase.User);
            if(withRedirect){
              this.redirectUser();
            }
          });
        });
      } else {
        // this is the error you where looking at the video that I wasn't able to fix
        // the function is running on refresh so its checking if the user is logged in or not
        // hence the redirect to the login
        this.ngZone.run(() => this.router.navigate(['/login']));
      }
    });

  }


  redirectUser() {
    // setUserStatus
      this.ngZone.run(() => this.router.navigate(['/home']));
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')  || '');
    return user !== null && user.emailVerified !== false ? true : false;
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider()).then((res: any) => {
      if (res) {
      }
    });
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        if(result.user){
          this.currentUser.next(result?.user)
          this.ngZone.run(() => {
            this.router.navigate(['/home']);
          });
        }
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      id: user.uid,
      email: user?.email,
      imageUrl: user?.imageUrl || '',
      emailVerified: user.emailVerified || false,
      age: user?.age,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.currentUser.next(null);
      this.router.navigate(['sign-in']);
    });
  }



  // get cars by category
  getCars(cat: string): Observable<any>{
    let cars: any[] = [];
    return new Observable((sub) =>{
      this.afs.collection('products').ref.where('productCategory', '==', cat).onSnapshot(snap => {
        cars = []
        snap.forEach(p => {
          cars.push(p.data());
        });
        sub.next(cars);
      }, () => {
        sub.error('Error');
      });

    })
  }
  // get cars by id
  getCarsById(id: string): Observable<any>{
    return new Observable((sub) =>{
      this.afs.collection('products').ref.where('productId', '==', id).onSnapshot(snap => {
        sub.next(snap.docs[0].data());
      }, () => {
        sub.error('Error');
      });

    })
  }
}
