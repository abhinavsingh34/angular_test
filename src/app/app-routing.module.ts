import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component: UserRegistrationComponent },
  { path: 'detail', component: UserDetailsComponent },
  { path: 'update/:id', component: UserUpdateComponent },
  { path: '**', component: UserRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
