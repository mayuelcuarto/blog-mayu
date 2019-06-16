import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ListPostsComponent } from './components/admin/list-posts/list-posts.component';
import { ModalPostComponent } from './modals/modal-post/modal-post.component';

import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { PostComponent } from './components/post/post.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { Page404Component } from './components/page404/page404.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsComponent } from './components/posts/posts.component';
import { ArchivePostsComponent } from './components/archive-posts/archive-posts.component';

import {NgxPaginationModule} from 'ngx-pagination';

import { SafePipe } from './pipes/safePipe';
import { MesNamePipe } from './pipes/mesNamePipe';
import { MesAcroPipe } from './pipes/mesAcroPipe';
import { SearchTituloComponent } from './components/search-titulo/search-titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    ListPostsComponent,
    ModalPostComponent,
    PostComponent,
    VideojuegosComponent,
    TecnologiaComponent,
    Page404Component,
    PostsComponent,
    ArchivePostsComponent,
    SafePipe,
    MesNamePipe,
    MesAcroPipe,
    SearchTituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [
    AngularFireAuth,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
