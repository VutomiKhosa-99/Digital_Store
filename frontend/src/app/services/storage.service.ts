import { Injectable } from '@angular/core';


const USER_KEY = 'auth-user';
const ACTIVE_CART = 'active-cart'
const USER_TYPE = 'user-type'

@Injectable({
  providedIn: 'root'
})
  
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }


  public saveCartSession(cart: any): void {
    window.sessionStorage.setItem(ACTIVE_CART, JSON.stringify(cart));
  }

  public saveUserTypeSession(user: any): void {
    window.sessionStorage.setItem(USER_TYPE, JSON.stringify(user));
  }
  

  public getLoggedUser(): any {
    const logged = window.sessionStorage.getItem(USER_KEY);
    
    if (logged) {
      return JSON.parse(logged);
    }

    return null;
  }


  public getCart(): any {
    const cart = window.sessionStorage.getItem(ACTIVE_CART);
    
    if (cart) {
      return JSON.parse(cart);
    }

    return {};
  }


  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

 
}
