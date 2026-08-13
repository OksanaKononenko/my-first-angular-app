import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts-page',
  imports: [],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.css',
})
export class ContactsPage {

// Квадратні дужки [] означають, що це саме список (масив).
  // Кожну назву ми беремо в одинарні лапки і відділяємо від іншої комою.
  socialNetworks = ['Instagram', 'Telegram', 'Facebook', 'TikTok'];
  // 2. Другий масив посилання  містить об’єкти, де кожен об’єкт має два поля: name та url.
socialNetworksUrl = [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Telegram',  url: 'https://telegram.org' }
  ];
   phoneNumbers = ['+380123456789', '+380987654321', '+380987654321', '+380987654321'];

}
