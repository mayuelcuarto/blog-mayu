import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostInterface } from '../../models/post';


@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  constructor(private postService: PostService) { }
  public posts = [];

  ngOnInit() {
  	this.getPostsByCategoriaDestacado('tecnologia');
  }

  getPostsByCategoriaDestacado(categoria: string): void{
  	this.postService.getPostsByCategoriaDestacado(categoria).subscribe(posts => {
  		this.posts = posts;
  	});
  }

}
