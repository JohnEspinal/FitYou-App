import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import {Plan} from "../../interfaces/plan.interface"
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.cpmponent.css'
  ]
})
export class ListComponent implements OnInit {

  plans: Plan[] = [{
    Id:12,
    Title:"Internet Movil 50GB",
    Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    TypeOfPlan:"M",
    CreateDate:"2022-01-15T00:00:00",
    ActiveTime:"Un mes",
    Price:1700.00,
    Currency:"DOP",
    Administrator:null,
    AdministratorId:1,
    Company:null,
    CompanyId:1

  }]
  products: Product[] = [{

    id:"123",
    code:"123",
    name:"jose",
    description:"wefwerewrewrwerwerew",
    price:123123,
    quantity:12123123,
    inventoryStatus:"string",
    category:"string",
    image:"string",
    rating:123213213,

  },{
    id:"123",
    code:"123",
    name:"jose",
    description:"wefwerewrewrwerwerew",
    price:123123,
    quantity:12123123,
    inventoryStatus:"string",
    category:"string",
    image:"string",
    rating:123213213,

  },
  {
    id:"123",
    code:"123",
    name:"pedro",
    description:"wefwerewrewrwerwerew",
    price:123123,
    quantity:12123123,
    inventoryStatus:"string",
    category:"string",
    image:"string",
    rating:123213213,

  },
  {
    id:"123",
    code:"123",
    name:"jose",
    description:"wefwerewrewrwerwerew",
    price:123123,
    quantity:12123123,
    inventoryStatus:"string",
    category:"string",
    image:"string",
    rating:123213213,

  },
  {
    id:"123",
    code:"123",
    name:"jose",
    description:"wefwerewrewrwerwerew",
    price:123123,
    quantity:12123123,
    inventoryStatus:"string",
    category:"string",
    image:"string",
    rating:123213213,

  },  {
    id:"123",
    code:"123",
    name:"jose",
    description:"wefwerewrewrwerwerew",
    price:123123,
    quantity:12123123,
    inventoryStatus:"string",
    category:"string",
    image:"string",
    rating:123213213,

  },  {
    id:"123",
    code:"123",
    name:"jose",
    description:"wefwerewrewrwerwerew",
    price:123123,
    quantity:12123123,
    inventoryStatus:"string",
    category:"string",
    image:"string",
    rating:123213213,

  },  {
    id:"123",
    code:"123",
    name:"jose",
    description:"wefwerewrewrwerwerew",
    price:123123,
    quantity:12123123,
    inventoryStatus:"string",
    category:"string",
    image:"string",
    rating:123213213,

  },  {
    id:"123",
    code:"123",
    name:"jose",
    description:"wefwerewrewrwerwerew",
    price:123123,
    quantity:12123123,
    inventoryStatus:"string",
    category:"string",
    image:"string",
    rating:123213213,

  },  {
    id:"123",
    code:"123",
    name:"jose",
    description:"wefwerewrewrwerwerew",
    price:123123,
    quantity:12123123,
    inventoryStatus:"string",
    category:"string",
    image:"string",
    rating:123213213,

  },  {
    id:"123",
    code:"123",
    name:"jose",
    description:"wefwerewrewrwerwerew",
    price:123123,
    quantity:12123123,
    inventoryStatus:"string",
    category:"string",
    image:"string",
    rating:123213213,

  },  {
    id:"123",
    code:"123",
    name:"jose",
    description:"wefwerewrewrwerwerew",
    price:123123,
    quantity:12123123,
    inventoryStatus:"string",
    category:"string",
    image:"string",
    rating:123213213,

  },  {
    id:"123",
    code:"123",
    name:"jose",
    description:"wefwerewrewrwerwerew",
    price:123123,
    quantity:12123123,
    inventoryStatus:"string",
    category:"string",
    image:"string",
    rating:123213213,

  }];

  sortOptions: SelectItem[] = [];


  sortOrder: number = 0;

  sortField: string = "";

  constructor( private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      // this.productService.getProducts().then(data => this.products = data);

      this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
    ];

    this.primengConfig.ripple = true;
  }
  
  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}
