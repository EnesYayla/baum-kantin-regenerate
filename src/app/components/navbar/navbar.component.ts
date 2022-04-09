import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { Product } from 'src/app/models/product';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgModule } from '@angular/core';

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
    private productService: ProductService,
    private employeeService: EmployeeService,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}

  logOut() {
    this.authenticationService.logOut();
  }
}
