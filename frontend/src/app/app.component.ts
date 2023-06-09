import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { EventBusService } from './_shared/event-bus.service';
import { CartService } from './services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  numCartItems : number
  isAdmin = false

  title = 'frontend'

  eventBusSub?: Subscription;



  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    public cartService: CartService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      if(user.email.indexOf('admin.dfs')> -1){
        this.storageService.saveUserTypeSession(user)
        this.isAdmin=true
      }else{
        this.isAdmin = false
      }

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      

      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });

    this.cartService.loadCart();
    this.cartService.cartProducts = this.cartService.getItems();


    this.numCartItems = this.cartService.cartProducts.length


  }


  checkIfLogged(){
    const logged = this.storageService.isLoggedIn()
    

    if(logged){
      
       this.router.navigate(['/checkout'])
    }else{

        this.router.navigate(['/login'])
    }
  }


  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        this.storageService.clean();

        window.location.reload();
        // this.router.navigate(['/login'])

      },
      error: err => {
        console.log(err);
      }
    });
  }
}

