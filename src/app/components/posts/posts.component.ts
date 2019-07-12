import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(
    private postService: PostService, 
    private route: ActivatedRoute
    ) { }
  public posts = [];

  ngOnInit() {
    this.route.params
    .forEach(params => {
    // This will be triggered every time the params change
    // Add your code to reload here. i.e.
      const year = params['year'];
      const month = params['month'];

      this.getPostsByCategoriaYearMonth('videojuegos', year, month);
    });
    /*
  	let year = this.route.snapshot.params['year'];
  	let month = this.route.snapshot.params['month'];
  	this.getPostsByCategoriaYearMonth('videojuegos', year, month);*/
  }

  getPostsByCategoriaYearMonth(categoria: string, year: number, month: number): void{
  	this.postService.getPostsByCategoriaYearMonth(categoria, year, month).subscribe(posts => {
  		this.posts = posts;
  	});
  }
}
