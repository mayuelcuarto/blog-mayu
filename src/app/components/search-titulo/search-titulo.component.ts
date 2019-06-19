import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search-titulo',
  templateUrl: './search-titulo.component.html',
  styleUrls: ['./search-titulo.component.css']
})
export class SearchTituloComponent implements OnInit {

  constructor(
  	private postService: PostService,
  	private route: ActivatedRoute) { }
  public posts = [];

  ngOnInit() {
  	const titulo: string = this.route.snapshot.params['titulo'];
  	this.postService.getAllPosts().subscribe(posts => {
      let postsFilter = posts.filter(item => item.titulo.toLowerCase().indexOf(titulo.toLowerCase()) > -1);
      this.posts = postsFilter;
  	})
  }

}
