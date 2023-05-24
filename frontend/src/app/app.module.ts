import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
import { PaymentComponent } from './payment/payment.component';


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
      PaymentComponent
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
