import { Injectable } from '@angular/core';
import {
    AngularFirestore
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(
        private store: AngularFirestore
    ) { }





    updateUser(user: User): Observable<any> {
        return new Observable(sub => {
            this.store.doc(`users/${user.id}`).update(user).then(() => {
                sub.next(true);
            }).catch((err) => {
                sub.error(err);
            });
        });
    }
}
