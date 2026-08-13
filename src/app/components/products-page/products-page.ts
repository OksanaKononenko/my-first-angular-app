import { Component } from '@angular/core';
 // Імпортуємо компонент ProductCardComponent/
 // Виходимо з папки products-page (..) і заходимо в сусідню папку product-card:
import { ProductCardComponent } from '../product-card-component/product-card';



@Component({
  selector: 'app-products-page',
  imports: [ProductCardComponent],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {

productsList = [
   { name: 'Ноутбук', price: 25000, imageUrl: '1.png', quantity: 5},
    { name: 'Смартфон', price: 15000, imageUrl: '2.png' , quantity: 10},
    { name: 'Навушники', price: 2000, imageUrl: '3.png' , quantity: 20}
      
  ];



}
