import { Component, OnInit , OnDestroy} from "@angular/core";
import { ProductsService } from "./products.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'

})
export class ProductsComponent implements OnInit ,OnDestroy{
    productsName = 'A Book';
    isDisabled = true;
    products: string[] = [];
    private productsSubscription!: Subscription;

    constructor(private productsService: ProductsService){
        setTimeout(() => {
            this.isDisabled = false;
        }, 5000);
    }

    ngOnInit(): void {
        this.products = this.productsService.getProducts();
        this.productsSubscription = this.productsService.productsUpdated.subscribe(() =>{
            this.products = this.productsService.getProducts();
        });
    }

    onAddProduct(form: any){
        if (form.valid) {
            // this.products.push(form.value.productName);
            this.productsService.addProducts(form.value.productName);
        }
    }
    onRemoveProduct(productName: string){
        this.products = this.products.filter(p => p !== productName);
    }

    ngOnDestroy(): void {
        this.productsSubscription.unsubscribe();
    }
}