import { RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { blogListComponent } from './blog-list.component';
import { blogSingleComponent } from './blog-single.component';


const appRoutes = [
  { path: 'advertisement', component: AdvertisementComponent},
  { path: 'book/new', component: BookFormComponent },
  { path: 'book/:id', component: BookDetailComponent },
  { path: 'book/edit/:id', component: BookFormComponent },
  // { path: '', redirectTo: 'advertisement', pathMatch: 'full' },
  { path: 'blog', component: blogListComponent },
  { path: 'blog/:id', component: blogSingleComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
