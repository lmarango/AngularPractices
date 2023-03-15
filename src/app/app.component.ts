import { Component } from '@angular/core';
import { Product } from './product/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Luis';
  age = 25;
  img = "https://www.androidsis.com/wp-content/uploads/2009/06/fondo-de-pantalla-juegos-7.jpeg"
  btnDisabled = true;
  person = {
    name: 'Luis',
    age: 16,
    avatar: this.img
  }
  names: string[] = ['Julio', 'Daniel', 'Laura']
  newName: string = "";
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }
  products: Product[] = [
    {
      name: 'Escorpions',
      price: 24900,
      image: '../assets/images/Camisa1.jpg',
      category: 'Camisa'
    },
    {
      name: 'Kakashi',
      price: 27900,
      image: '../assets/images/Camisa2.jpg'
    },
    {
      name: 'Pain',
      price: 22900,
      image: '../assets/images/Camisa3.jpg'
    },
    {
      name: 'ACDC',
      price: 24900,
      image: '../assets/images/Camisa4.jpg'
    },
    {
      name: 'Goku SSJ2',
      price: 21900,
      image: '../assets/images/Camisa5.jpg'
    }
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
