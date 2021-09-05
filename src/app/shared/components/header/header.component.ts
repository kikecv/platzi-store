import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>

  constructor(
    private cartServices: CartService
  ) {
    this.total$ = this.cartServices.cart$
      .pipe(
        map(products => products.length)
      )
      
  }

  ngOnInit(): void {
  }

}
