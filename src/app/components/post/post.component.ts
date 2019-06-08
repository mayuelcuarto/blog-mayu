import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public posts = [];
  public post = '';

  ngOnInit() {
  	this.dataApi.getAllPosts().subscribe(posts => {
  		console.log('Posts', posts);
      this.posts = posts;
  	})
  }

}
