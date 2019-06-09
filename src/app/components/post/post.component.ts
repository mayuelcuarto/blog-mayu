import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { PostInterface } from '../../models/post';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  public post: PostInterface = {};
  ruta = null;

  ngOnInit() {
    const idPost = this.route.snapshot.params['id'];
    this.getDetails(idPost);
  }

  getDetails(idPost: string): void{
    this.dataApi.getOnePost(idPost).subscribe(post => {
      this.post = post;
    });
  }

}
