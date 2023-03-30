import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  product={
    name: 'Product 1',
    image: './assets/images/default.jpg',
    price: 100
  }
  constructor(){}
  ngOnInit(): void {}
}
