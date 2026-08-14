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

// Функція просто фіксує, що сигнал надійшов
  // onProductBought() {
  //   console.log('Сигнал отримано! Хтось натиснув кнопку "Купити".');
  // }

  //  функція очікує 3 аргументи (рядки тексту)
// onProductBought(productName: string, productPrice: string, productQuantity: string) {
//   console.log('Ураававк! Ми додали в кошик товар:', productName);
//   console.log('Ціна:', productPrice);
//   console.log('Кількість:', productQuantity);
// }

// ПРАВИЛЬНО: Функція приймає 1 аргумент (об'єкт із даними)
onProductBought(productData: {name: string, price: number, quantity: number}) {
  console.log('Ми отримали товар:', productData.name);
  console.log('Його ціна:', productData.price);
  console.log('Залишок на складі:', productData.quantity);
}
}
