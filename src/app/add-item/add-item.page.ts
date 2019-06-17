import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ProductService } from '../providers/product.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})

export class AddItemPage implements OnInit {
  isReadyToSave: Boolean; 
  itemForm: FormGroup;
  item_id:number=null;
  item_upc:number=null;
  item_name:string='';
  item_brand:string='';
  item_company:string='';
  item_color:string='';
  item_dimensions:string='';
  item_description:string='';
  item_size:string='';
  item_weight:string='';  
  item:Item;

  constructor(public api: ProductService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private formBuilder:FormBuilder

    ) { 
      this.itemForm = formBuilder.group({  //this mean...this class variables
        //item_id: [''],
        item_upc: [''],
        item_name: ['', Validators.required],
        item_brand: [''],
        item_company: [''],
        item_color: [''],
        item_dimensions: [''],
        item_description:[''],
        item_size: [''],
        item_weight: [''],
      });
    }

  ngOnInit() {
   
    
  }

   onFormSubmit(itemForm) {
    
  this.api.addItem(itemForm)
      .subscribe(res => {
        this.isReadyToSave = this.itemForm.valid;   
        }, (err) => {
          console.log(err);
        });
  }

}

