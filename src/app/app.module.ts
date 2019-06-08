import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

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
    TecnologiaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
            [],
            {
                // Tell the router to use the hash instead of HTML5 pushstate.
                useHash: true,
 
                // In order to get anchor / fragment scrolling to work at all, we need to
                // enable it on the router.
                anchorScrolling: "enabled",
 
                // Once the above is enabled, the fragment link will only work on the
                // first click. This is because, by default, the Router ignores requests
                // to navigate to the SAME URL that is currently rendered. Unfortunately,
                // the fragment scrolling is powered by Navigation Events. As such, we
                // have to tell the Router to re-trigger the Navigation Events even if we
                // are navigating to the same URL.
                onSameUrlNavigation: "reload",
 
                // Let's enable tracing so that we can see the aforementioned Navigation
                // Events when the fragment is clicked.
                enableTracing: true,
                scrollPositionRestoration: "enabled"
            }
        ),
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [
    AngularFireAuth,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
