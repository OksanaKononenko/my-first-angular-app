import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
  
export class MainPage {
  // Створюємо звичайну текстову змінну
  userName = 'Олена'; 
  userAge = 25;


// Це наша нова функція. Дужки () означають, що це дія.
  showMessage() {
    // Вбудована команда браузера, яка показує спливаюче вікно
    alert('Дякуємо, що обрали наш бренд!');
  }


// Створюємо змінну-перемикач. Спочатку вона false (вимкнена / прихована)
  showSecretMessage = false;

  // Оновлюємо нашу функцію
  toggleMessage() {
    // Знак оклику ! означає "зроби навпаки". 
    // Було false - стане true. Було true - стане false.
    this.showSecretMessage = !this.showSecretMessage;
  }










}