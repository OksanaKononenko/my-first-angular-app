// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-product-card',
//   imports: [],
//   templateUrl: './product-card.html',
//   styleUrl: './product-card.css',
// })
// export class ProductCard {}

import { Component, Input, Output, EventEmitter } from '@angular/core'; // '@angular/core' це модуль, який містить основні функціональні можливості Angular, включаючи декоратори та інші інструменти для створення компонентів, директив та сервісів. 

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  // Ставимо @Input(), щоб картка могла отримати назву та ціну від батьківського компонента
  @Input() name = 'Невідомий товар';
  @Input() imageUrl = '1.png';
  @Input() price = 0;
  @Input() quantity = 0;

// Вказуємо <void>, коли передаємо лише сигнал, без даних
//   використовуємо EventEmitter<string>, щоб вказати, що подія buyEvent може передавати рядкові дані (string) при її виклику. 
  // @Output() buyEvent = new EventEmitter<string>(); виводить одне значення, а нам потрібно виводити три значення (назву, ціну та кількість товару). Тому ми можемо використовувати EventEmitter<string> для кожного з цих значень окремо.
// або Вказуємо, що будемо передавати об'єкт із трьома властивостями
@Output() buyEvent = new EventEmitter<{name: string, price: number, quantity: number}>();

  onBuyClick() {
    // Викликаємо emit() з порожніми дужками!
    // this.buyEvent.emit(); 

    // Відправляємо назву товару назовні
    this.buyEvent.emit({name: this.name, price: this.price, quantity: this.quantity});     
}
}
