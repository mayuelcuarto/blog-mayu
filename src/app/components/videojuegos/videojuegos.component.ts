import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostInterface } from '../../models/post';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  constructor(private postService: PostService) { }
  public posts = [];

  ngOnInit() {
    this.getPostsByCategoriaDestacado('videojuegos');
  }

  getPostsByCategoriaDestacado(categoria: string): void{
  	this.postService.getPostsByCategoriaDestacado(categoria).subscribe(posts => {
  		this.posts = posts;
  	});
  }

}
