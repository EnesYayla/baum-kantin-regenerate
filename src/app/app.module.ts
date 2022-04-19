import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryComponent } from './components/category/category.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ProductAddComponent } from './components/productCRUD/product-add/product-add.component';
import { EmployeeAddComponent } from './components/employeeCRUD/employee-add/employee-add.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CategoryComponent,
    StatisticsComponent,
    HomeComponent,
    PaymentComponent,
    WelcomeComponent,
    ProductComponent,
    NotFoundComponent,
    ProductAddComponent,
    EmployeeAddComponent,
    AddToCartComponent,
    
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
