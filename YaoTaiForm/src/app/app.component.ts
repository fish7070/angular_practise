import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customers } from './_data/customer-data';
import { Products } from './_data/product-data';
import { Customer, ProjectInfo } from './_type/project-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YaoTaiForm';
  projectsInfo?: ProjectInfo[];
  customers = Customers;
  products = Products;
  
  projectForm = new FormGroup({
    id: new FormControl(''),
    taskid: new FormControl(''),
    purchaseid: new FormControl(''),
    workday: new FormControl(''),
    deadline: new FormControl(''),
    productId: new FormControl(),
    customerId: new FormControl(),
    taskquantity: new FormControl(''),
  })
  


  constructor() {}

  // show(){
  //   console.log(this.projectForm.value.customerId);
  //   console.log(typeof this.projectForm.value.customerId);
  // }

  getCustomerPhoneNumber(): string {
    const customer = this.customers.find(c => c.id === +this.projectForm.value.customerId);
    return customer ? customer.phonenumber : '';
  }

  getProductInventory(): string {
    const product = this.products.find(p => p.id === +this.projectForm.value.productId);
    return product ? product.inventory : '';
  }

  getProductMaterialweight(): string {
    const product = this.products.find(p => p.id === +this.projectForm.value.productId);
    return product ? product.materialweight : '';
  }

  getProductionQuantity(): string {
    const product = this.products.find(p => p.id === +this.projectForm.value.productId);
    return product ? product.productionquantity : '';
  }

  // onadd(){
  //   projectInfo: Pro
  //   this.projectsInfo?.push()
  // }

}
