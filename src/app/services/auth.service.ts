import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFirebase: AngularFireAuth) {
  }
  async login(email: string, password: string) {
    try {
      return await this.authFirebase.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log('error en login', e)
      return null
    }
  }
  /*registrar un usuario*/
  async register(email: string, password: string) {
    try {
      return await this.authFirebase.createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.log('error en registro', e);
      return null
    }
  }


  /* Obtener usuario logueado */
  getUserLogged() {
    return this.authFirebase.authState;
  }

  /* Cerrar sesión */
  logout() {
    this.authFirebase.signOut();
  }

}
