import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      const id = params.id;
      this.fetchProduct(id);
    // this.product = this.productsService.getProduct(params.id)
     })
  }

  fetchProduct(id:string){
    this.productsService.getProduct(id)
    .subscribe(product =>{
      this.product=product
      }
    )
  }

  createProduct(){
    const newProduct: Product= {
      id: "11",
      image: "assets/images/reloj.png",
      title: "Reloj de Pared Angular",
      price: 5600,
      description: "Reloj de Pared dorado Siglo XIX"
    }
    this.productsService.createProduct(newProduct)
    .subscribe(
      product => {
        console.log(product)
      }
    )
  }

  updateProduct(){
    const updateProduct: Partial<Product>= {
      
      title: "Nuevo Reloj de Pared Angular",
      price: 8888,
      description: "Nuevo Reloj de Pared dorado Siglo XIX"
    }
    this.productsService.updateProduct('7',updateProduct)
    .subscribe(
      product => {
        console.log(product)
      }
    )
  }

  deleteProduct(){
    this.productsService.deleteProduct('7')
    .subscribe(
      rta => {
        console.log(rta)
      }
    )
  }

}
