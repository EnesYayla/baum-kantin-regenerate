import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
// import { ListResponseModel } from '../models/listResponseModel';
// import { ResponseModel } from '../models/responseModel';


@Injectable({providedIn: 'root'})
export class ProductService {
  private apiServerUrl = environment.apiBaseUrl;
  apiUrl = 'https://localhost:44314/api/';
  constructor(private httpClient: HttpClient){}

  public getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiServerUrl}/product/all`);
  }

  public addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.apiServerUrl}/product/add`, product);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.apiServerUrl}/product/update`, product);
  }

  public deleteProduct(productId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServerUrl}/product/delete/${productId}`);
  }
   //Sonradan eklendi - Alternatif get Metodları //Şu an kullanılmıyor
  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "product/getbycategory?categoryId=" + categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/products/add",product)
  }
}

  

 


