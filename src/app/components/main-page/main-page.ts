import { Component, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage implements OnDestroy {
  // Підключаємо детектор змін
  private cdr = inject(ChangeDetectorRef);

  // --- ЗМІННІ КОРИСТУВАЧА ---
  userName = 'Олена'; 
  userAge = 25;
  showSecretMessage = false;

  // --- ЗМІННІ ЛІЧИЛЬНИКА ---
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  private timerId: any;
  targetDate = new Date('2026-08-19T11:05:59').getTime();

  // Запускаємо лічильник одразу при створенні компонента
  constructor() {
    this.startCountdown();
  }

  // --- ФУНКЦІЇ ПОВІДОМЛЕНЬ ---
  showMessage() {
    alert('Дякуємо, що обрали наш бренд!');
  }

  toggleMessage() {
    this.showSecretMessage = !this.showSecretMessage;
  }

  // --- ФУНКЦІЇ ТАЙМЕРА ---
  startCountdown() {
    // ЗАПИСУЄМО таймер у змінну timerId
    this.timerId = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.targetDate - now;

      console.log('Залишилось мілісекунд:', distance);

      if (distance > 0) {
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // ✅ ПРИМУСОВО оновлюємо екран кожну секунду
        this.cdr.detectChanges(); 
      } else {
        // Якщо час вийшов — зупиняємо таймер
        clearInterval(this.timerId);
      }
    }, 1000); 
  }

  // Очищуємо пам'ять (зупиняємо таймер), коли йдемо зі сторінки
  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
}