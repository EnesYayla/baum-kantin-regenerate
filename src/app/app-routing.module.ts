import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { CategoryComponent } from './components/category/category.component';
import { EmployeeAddComponent } from './components/employeeCRUD/employee-add/employee-add.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/productCRUD/product-add/product-add.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WelcomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'navbar', component: NavbarComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
  {
    path: 'product-crud',
    component: ProductAddComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'employee-crud',
    component: EmployeeAddComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-to-card',
    component: AddToCartComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
