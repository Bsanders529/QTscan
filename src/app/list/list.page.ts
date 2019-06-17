import { Component, OnInit } from '@angular/core';
import { ProductService } from '../providers/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  //public api:ProductService;
  public data:[];
  public errorMessage:any;
  constructor(public api:ProductService) { }

  ngOnInit() {
    this.show();
  }

  show(){
    return this.api.getData().subscribe(
      data => { 
        this.data = data;
        console.log(data);
      },
      error => this.errorMessage = <any>error  
      );
}
}
