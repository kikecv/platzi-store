import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup = new FormGroup({ });
  image$: Observable<any> = new Observable

  constructor(
    private formbuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value
      this.productService.createProduct(product)
        .subscribe(newProduct => {
          console.log(newProduct)
          this.router.navigate(['./admin/products'])

        })
    }


  }

  uploadFile(event: any) {
    const file = event.target.files[0]
    const dir = 'images'
    const fileRef = this.storage.ref(dir)
    const task = this.storage.upload(dir, file)

    task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL()
          this.image$.subscribe(url =>{
            console.log(url)
            this.form.get('image')!.setValue(url)
          })
        }
        )

      ).subscribe()
  }

  private buildForm() {
    this.form = this.formbuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', Validators.required],
    })
  }

  get priceField() {
    return this.form.get('price')
  }

}
