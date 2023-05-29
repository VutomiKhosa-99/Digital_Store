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
import { ProfileComponent } from './profile/profile.component';
import { CartTableComponent } from './cart-table/cart-table.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [

{path: 'home', component:HomeComponent},
{path: 'register', component:RegisterComponent},
{path: 'cart', component:CartComponent},
{path: 'breadcrumb', component:BreadcrumbComponent},
{path: 'products/:id', component:ProductsDetailsComponent},
{path: 'navBar', component:NavbarComponent},
{path: 'login', component:LoginComponent},
{path: 'footer', component:FooterComponent},
{path: 'profile', component: ProfileComponent},
{path: 'checkout', component: CartTableComponent},
  { path: 'invoice', component: InvoiceComponent },
  { path: 'addProducts', component: AddProductsComponent },
  { path: 'viewProducts',component:ViewProductsComponent},
{ path: '', redirectTo: 'home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
