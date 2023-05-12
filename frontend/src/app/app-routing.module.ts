import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

{path: 'home', component:HomeComponent},
{path: 'register', component:RegisterComponent},
{path: 'cart', component:CartComponent},
{path: 'breadcrumb', component:BreadcrumbComponent},
{path: 'productDetails', component:ProductsDetailsComponent},
{path: 'navBar', component:NavbarComponent},
{path: 'login', component:LoginComponent},
{path: 'footer', component:FooterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
