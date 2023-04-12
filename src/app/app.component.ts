import { Component } from '@angular/core';
import { Product } from "./models/product.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  imgParent = '';

  products: Product[] = [
    {
      id: 'p1',
      name: 'Product 1',
      image: './assets/images/default.jpg',
      price: 100
    },
    {
      id: 'p2',
      name: 'Product 1',
      image: './assets/images/default.jpg',
      price: 100
    },
    {
      id: 'p3',
      name: 'Product 1',
      image: './assets/images/default.jpg',
      price: 100
    }
  ]

  onLoaded(img: string){
    console.log('log padre', img)
  }
}
