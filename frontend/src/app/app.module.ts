import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProfileComponent } from './profile/profile.component';
import { SizeGuideComponent } from './size-guide/size-guide.component';
import { CartTableComponent } from './cart-table/cart-table.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';


@NgModule({
  declarations: [			
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    ProductsDetailsComponent,
    BreadcrumbComponent,
    ProductCardComponent,
    ProfileComponent,
    SizeGuideComponent,
    CartTableComponent,
    InvoiceComponent,
    AddProductsComponent,
    ViewProductsComponent,
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
