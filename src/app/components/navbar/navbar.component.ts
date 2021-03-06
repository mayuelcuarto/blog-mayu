import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
  	private authService: AuthService,
  	private afsAuth: AngularFireAuth,
    private router: Router
  	) { }
  public app_name: string = 'El Blog del Mayu';
  public isLogged: boolean = false;
  public isAdmin: any = null;
  public userUid: string = null;
  public email: string = null;

  public titulo: string = null;

  ngOnInit() {
  	this.getCurrentUser();
  }

  getCurrentUser(){
  	this.authService.isAuth().subscribe(auth => {
  		if(auth){
  			console.log('user logged');
  			this.isLogged = true;
        this.userUid = auth.uid;
        this.email = auth.email;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
        })
  		}else{
  			console.log('user not logged');
  			this.isLogged = false;
  		}
  	})
  }

  onSearch(): void{
      window.location.href = '/search/' + this.titulo;
  }

  onLogout(){
  	this.afsAuth.auth.signOut();
  }

}
