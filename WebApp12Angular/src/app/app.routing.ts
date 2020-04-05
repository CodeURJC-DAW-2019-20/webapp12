import { RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';


const appRoutes = [
  { path: 'advertisement', component: AdvertisementComponent, useAsDefault: true },
  { path: 'book/new', component: BookFormComponent },
  { path: 'book/:id', component: BookDetailComponent },
  { path: 'book/edit/:id', component: BookFormComponent },
  { path: '', redirectTo: 'advertisement', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
