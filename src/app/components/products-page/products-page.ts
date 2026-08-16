import { Component } from '@angular/core';
 // Імпортуємо компонент ProductCardComponent/
 // Виходимо з папки products-page (..) і заходимо в сусідню папку product-card:
import { ProductCardComponent } from '../product-card-component/product-card';

// Інтерфейс для елемента кошика
interface CartItem {
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

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
  console.log('Залишок на складі:', productData.quantity-1);


  // 1. Шукаємо цей конкретний товар у нашому масиві productsList за назвою
    const currentProduct = this.productsList.find(item => item.name === productData.name);

    // 2. Якщо товар знайдено і його кількість більше нуля — віднімаємо 1
    if (currentProduct && currentProduct.quantity > 0) {
      currentProduct.quantity--; // Зменшуємо на 1
      console.log(`Товар "${currentProduct.name}" додано! Залишок: ${currentProduct.quantity}`);
    }
}
// 0. Змінна-перемикач (за замовчуванням кошик прихований)
  isCartVisible = false;

  // 2. Функція для відкриття/закриття кошика
  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

// 1. Створюємо порожнє місце для покупок
// Масив товарів у кошику
  cart: CartItem[] = [];

// 1. Створюємо змінну, яка буде зберігати назву останнього доданого товару
  lastAddedProduct = '';
  
// 2. Функція додає товар у кошик
  addToCart(productData: { name: string; price: number }) {
    const existingItem = this.cart.find(item => item.name === productData.name);

    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.quantity * existingItem.price;
    } else {
      // ✅ ПРАВИЛЬНО: Створюємо повноцінний об'єкт
      this.cart.push({
        name: productData.name,
        price: productData.price,
        quantity: 1,                  // Встановлюємо стартову кількість
        totalPrice: productData.price // Стартова сума дорівнює ціні одного товару
      });  
    }
// 2. Зберігаємо назву товару в змінну класу, щоб HTML міг її побачити
    this.lastAddedProduct = productData.name;

    // ✅ ВСІ ЛОГИ ПИШЕМО ТУТ (після if/else)
    console.log('Поточний вміст кошика:', this.cart);
    console.log('Назва щойно доданого товару:', productData.name); 
    console.log('Назви товарів у кошику:', this.cart.map(item => item.name).join(', '));
    console.log('Кількість унікальних товарів у кошику:', this.cart.length);
    console.log('Загальна сума в кошику:', this.cart.reduce((total, item) => total + item.totalPrice, 0));
  }    

 // Ця функція пройдеться по всьому кошику і додасть усі quantity
  get totalItemsCount(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }


//  перевірка на клік кнопки "Видалити" у кошику
testClick(product: CartItem) {
  console.log('Кнопка натиснута! Видаляємо товар:', product.name);
}

// Функція видалення товару з кошика
removeFromCart(product: CartItem) {
  // 1. Шукаємо цей товар на нашій вітрині (у головному масиві)
  const shelfItem = this.productsList.find(item => item.name === product.name);
  
  // 2. Якщо знайшли — повертаємо на полицю ту кількість, що лежала в кошику
  if (shelfItem) {
    shelfItem.quantity += product.quantity;
  }
  
  // 3. Викидаємо товар з масиву кошика (залишаємо всі, крім натиснутого)
  this.cart = this.cart.filter(item => item.name !== product.name);
}

}     // кінець блоку export