import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private postService: PostService) { }
  public posts = [];
  public post = '';

  ngOnInit() {
  	this.postService.getAllPosts().subscribe(posts => {
  		console.log('Posts', posts);
      this.posts = posts;
  	})
  }

}
