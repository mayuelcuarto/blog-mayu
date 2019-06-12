import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-archive-posts',
  templateUrl: './archive-posts.component.html',
  styleUrls: ['./archive-posts.component.css']
})
export class ArchivePostsComponent implements OnInit {

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
