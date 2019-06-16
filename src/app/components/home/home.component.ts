import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostInterface } from '../../models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private postService: PostService) { }
  public posts = [];
  public postsTCard = [];
  public postsVCard = [];

  ngOnInit() {
  	this.getPostsByCategoriaDestacado('mantenimiento');
    this.getPostsByCategoriaCardTecnologia('tecnologia');
    this.getPostsByCategoriaCardVideojuegos('videojuegos');
  }

  getPostsByCategoriaDestacado(categoria: string): void{
    this.postService.getPostsByCategoriaDestacado(categoria).subscribe(posts => {
      this.posts = posts;
    });
  }

  getPostsByCategoriaCardTecnologia(categoria: string): void{
    this.postService.getPostsByCategoriaCard(categoria).subscribe(posts => {
      this.postsTCard = posts;
    });
  }

  getPostsByCategoriaCardVideojuegos(categoria: string): void{
    this.postService.getPostsByCategoriaCard(categoria).subscribe(posts => {
      this.postsVCard = posts;
    });
  }

}
