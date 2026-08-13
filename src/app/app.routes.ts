 import { Routes } from '@angular/router';  //підключає інструмент Angular Router для переходу між сторінками.
import { MainPage  }   from './components/main-page/main-page';
import { AboutPage } from './components/about-page/about-page';
import { ContactsPage } from  './components/contacts-page/contacts-page';

import { ProductsPage} from  './components/products-page/products-page';

// export const routes: Routes = [];
export const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'about', component: AboutPage },
  { path: 'contacts', component: ContactsPage },
  { path: 'products', component: ProductsPage}
];
