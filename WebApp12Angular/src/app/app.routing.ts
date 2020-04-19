import { RouterModule } from '@angular/router';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { blogListComponent } from './blog-list.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { blogSingleComponent } from './blog-single.component';
import { AuthUserService } from './service/auth/auth.user.service';
import { PropertyUploadComponent } from './property-upload/propertyUpload.component';
import { blogUploadComponent } from './blog-upload.component';
import { AdvertisementListComponent } from './advertisement/advertisement-list.component';
import { AdvertisementSingleComponent } from './advertisement/advertisement-single.component';
import { ListAdvertisementsComponent } from './advertisement/listAllAdvertisements.component';
import { MyAdvertisementsComponent } from './advertisement/myAdvertisements.component';
import { AuthAdminService } from './service/auth/auth.admin.service';



const appRoutes = [
  { path: 'home', component: HomeComponent},
  { path: 'advertisement', component: AdvertisementListComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'favoritos/:id', component: FavoritosComponent , canActivate: [AuthUserService]},
  // { path: 'advertisementSearch', component: AdvertisementListComponent },

  // { path: '', redirectTo: 'advertisement', pathMatch: 'full' },
  { path: 'blog', component: blogListComponent },
  { path: 'blog/:id', component: blogSingleComponent},
  { path: 'advertisement/:id', component: AdvertisementSingleComponent },
  { path: 'new-blog', component: blogUploadComponent , canActivate: [AuthAdminService]},
  { path: 'new-blog/:id', component: blogUploadComponent , canActivate: [AuthAdminService]},
  { path: '', pathMatch:'full' ,redirectTo: 'home'},

  //{ path: 'blog/:id', component: blogSingleComponent},
  { path: 'propertyUpload', component: PropertyUploadComponent,canActivate: [AuthUserService]},
  { path: 'listAllAdvertisements', component: ListAdvertisementsComponent, canActivate: [AuthAdminService]},
  { path: 'myAdvertisements', component: MyAdvertisementsComponent ,canActivate: [AuthUserService]}

 
];

export const routing = RouterModule.forRoot(appRoutes);
