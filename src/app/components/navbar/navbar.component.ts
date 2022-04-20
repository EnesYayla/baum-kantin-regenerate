import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { Product } from 'src/app/models/product';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private employeeService: EmployeeService,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}

  showProducts() {
    this.router.navigate(['product-crud'], { relativeTo: this.route });
  }

  showEmployees() {
    this.router.navigate(['employee-crud'], { relativeTo: this.route });
  }

  logOut() {
    this.authenticationService.logOut();
  }
}
