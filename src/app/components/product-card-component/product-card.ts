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

// Вказуємо <void>, бо передаємо лише сигнал, без даних
  @Output() buyEvent = new EventEmitter<void>();

  onBuyClick() {
    // Викликаємо emit() з порожніми дужками!
    this.buyEvent.emit(); 
  }
}
