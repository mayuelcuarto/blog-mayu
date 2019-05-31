import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { PostInterface } from '../../../models/post';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../../models/user';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  public posts = [];
  public isAdmin: any = null;
  public userUid: string = null;

  ngOnInit() {
  	this.getListPosts();
  	this.getCurrentUser();
  }

  getCurrentUser(){
  	this.authService.isAuth().subscribe(auth => {
  		if(auth){
  			this.userUid = auth.uid;
  			this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
  				this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
  				//this.isAdmin = true;
  			})
  		}
  	})
  }

  getListPosts(){
  	this.dataApi.getAllPosts().subscribe(posts => {
  		this.posts = posts;
  	});
  }

  onDeletePost(idPost: string){
  	const confirmacion = confirm('Are you sure?');
  	if(confirmacion){
  		this.dataApi.deletePost(idPost);
  	}
  }

  onPreUpdatePost(post: PostInterface){
    this.dataApi.selectedPost = Object.assign({}, post);
  }
}
