import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { ListPostsComponent } from './components/admin/list-posts/list-posts.component'

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'user/register', component: RegisterComponent },
	{ path: 'user/login', component: LoginComponent },
	{ path: 'user/profile', component: ProfileComponent },
	{ path: 'admin/list-posts', component: ListPostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
