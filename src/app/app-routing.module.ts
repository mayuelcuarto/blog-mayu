import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { LoginMessageComponent } from './components/users/login-message/login-message.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { ListPostsComponent } from './components/admin/list-posts/list-posts.component'
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { Page404Component } from './components/page404/page404.component';
import { ArchivePostsComponent } from './components/archive-posts/archive-posts.component';
import { SearchTituloComponent } from './components/search-titulo/search-titulo.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'user/register', component: RegisterComponent },
	{ path: 'user/login', component: LoginComponent },
	{ path: 'user/login-message', component: LoginMessageComponent },
	{ path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] },
	{ path: 'admin/list-posts', component: ListPostsComponent, canActivate: [AuthGuard] },
	{ path: 'post/:id', component: PostComponent},
	{ path: 'posts/:year/:month', component: PostsComponent },
	{ path: 'videojuegos.html', component: VideojuegosComponent },
	{ path: 'tecnologia.html', component: TecnologiaComponent},
	{ path: 'archive-posts', component: ArchivePostsComponent },
	{ path: 'search/:titulo', component: SearchTituloComponent },
	{ path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  	{ useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }