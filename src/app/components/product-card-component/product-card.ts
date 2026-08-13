// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-product-card',
//   imports: [],
//   templateUrl: './product-card.html',
//   styleUrl: './product-card.css',
// })
// export class ProductCard {}

import { Component, Input } from '@angular/core'; // Обов'язково додаємо Input сюди

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


}
