import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { ListPostsComponent } from './components/admin/list-posts/list-posts.component'
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { Page404Component } from './components/page404/page404.component';
import { ArchivePostsComponent } from './components/archive-posts/archive-posts.component';
import { SearchTituloComponent } from './components/search-titulo/search-titulo.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'user/register', component: RegisterComponent },
	{ path: 'user/login', component: LoginComponent },
	{ path: 'user/profile', component: ProfileComponent },
	{ path: 'admin/list-posts', component: ListPostsComponent },
	{ path: 'post/:id', component: PostComponent},
	{ path: 'posts/:year/:month', component: PostsComponent },
	{ path: 'videojuegos', component: VideojuegosComponent },
	{ path: 'tecnologia', component: TecnologiaComponent },
	{ path: 'archive-posts', component: ArchivePostsComponent },
	{ path: 'search/:titulo', component: SearchTituloComponent },
	{ path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
