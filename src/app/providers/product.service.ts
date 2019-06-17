import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost/laravel/queensthings/public/product/";

@Injectable({
  providedIn: 'root'
})


export class ProductService {
  item:Item;
  url:string;
  data:Observable<any>;
  headers:HttpHeaders;
  
  
  constructor(private http:HttpClient) { console.log('hello product service') }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  //////////////////////////////////////////////////////////////

  


  getData():Observable<any>{    
    this.url = 'http://localhost/laravel/queensthings/public/api/product';
    return this.http.get(this.url);
  }

  addItem (item): Observable<Item> {
    //this.url = 'http://localhost/laravel/queensthings/public/api/product';
    return this.http.post<Item>(apiUrl, item, httpOptions).pipe(
      tap((item: Item) => console.log(`added product w/ id=${item.id}`)),
      catchError(this.handleError)
    );
  }
}


  

  


