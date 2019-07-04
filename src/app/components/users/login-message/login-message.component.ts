import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-message',
  templateUrl: './login-message.component.html',
  styleUrls: ['./login-message.component.css']
})
export class LoginMessageComponent implements OnInit {
public email: string = '';
    public password: string = '';

  constructor(
    public afAuth: AngularFireAuth, 
    private router: Router,
    private authService: AuthService,
    ) {}

  ngOnInit() {
  }

  onLogin(): void{
    this.authService.loginEmailUser(this.email, this.password)
    .then((res) => {
      this.authService.isAuth().subscribe(user => {
        if(user.emailVerified){
          this.onLoginRedirect();
        }else{
          alert("El email aún no se ha validado");
        }
      })
    }).catch(err => this.onCatchError(err));    
  }

  onLoginGoogle(): void{
    this.authService.loginGoogleUser()
    .then((res) => {
      this.onLoginRedirect();
    }).catch(err => this.onCatchError(err));  	
  }

  onLoginFacebook(): void{
  	this.authService.loginFacebookUser()
    .then((res) => {
      this.onLoginRedirect();
    }).catch(err => this.onCatchError(err));    
  }

  onLogout(): void{
  	this.authService.logoutUser();
  }

  onLoginRedirect(): void{
    this.router.navigate(['/']);
  }

  onCatchError(err): void{
    console.log('err', err.message);
  }
}
