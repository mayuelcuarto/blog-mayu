import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostInterface } from '../../models/post';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(
    private postService: PostService, 
    private route: ActivatedRoute) { }
  public posts = [];

  ngOnInit() {
  	const year = this.route.snapshot.params['year'];
  	const month = this.route.snapshot.params['month'];
  	this.getPostsByYearMonth(year, month);
  }

  getPostsByYearMonth(year: number, month: number): void{
  	this.postService.getPostsByYearMonth(year, month).subscribe(posts => {
  		this.posts = posts;
  	});
  }
}
