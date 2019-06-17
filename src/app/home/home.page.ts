import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ProductService } from '../providers/product.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //variables
  errorMessage:string;
  scannedCode:string;
  data:Observable<any>;

  brand:string;
  upc:string;
  company:string;
  description:string;
  item = {};

//initial function - inject barcode scanner
  constructor(private scanner:BarcodeScanner, private api:ProductService,http:HttpClient
    ){
      
  }

  
  logForm() {
    
    console.log(this.item);///we have object
    //read object UPC in db for checking item in db
    //input object in db....thru api service POST

  }


//scan function
  scanCode() {
    this.scanner.scan().then(barcodeData =>{
      this.scannedCode = barcodeData.text;
    });
  }
  
 getProducts(){
  
  return this.api.getData().subscribe(
    data => { 
      this.data = data;
      console.log(data);
    },
    error => this.errorMessage = <any>error  
    );
  }

  

}