import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
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
  config: any;

  constructor(private postService: PostService, private authService: AuthService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1
    }
  }
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
  			})
  		}
  	})
  }

  getListPosts(){
  	this.postService.getAllPosts().subscribe(posts => {
  		this.posts = posts;

      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: posts.length
      };
    });
  }

  onDeletePost(idPost: string){
  	const confirmacion = confirm('Are you sure?');
  	if(confirmacion){
  		this.postService.deletePost(idPost);
  	}
  }

  onPreUpdatePost(post: PostInterface){
    this.postService.selectedPost = Object.assign({}, post);
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  showId(id: string){
    alert(id);
  }
}
