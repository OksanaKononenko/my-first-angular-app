import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {

//  список людей (об'єктів)
  teamMembers = [
    { name: 'Олена', role: 'Головний дизайнер', age: 25, email: 'olena@example.com', telephone: '+380123456789', image: '1.png' },
    { name: 'Іван', role: 'Менеджер проєктів', age: 28, email: 'ivan@example.com', telephone: '+380123456789', image: '2.png' },
    { name: 'Анна', role: 'Маркетолог', age: 24, email: 'anna@example.com', telephone: '+380123456789', image: '3.png' }
  ];






}
