import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostInterface } from '../../models/post';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(
    private postService: PostService, 
    private authService: AuthService,
    private route: ActivatedRoute
    ) { }
  public post: PostInterface = {};

  ngOnInit() {
    const idPost = this.route.snapshot.params['id'];
    this.getDetails(idPost);
  }

  getDetails(idPost: string): void{
    this.postService.getOnePost(idPost).subscribe(post => {
      this.post = post;
        this.authService.getUserByUserUid(post.userUid).subscribe(user => {
          post.temp = user.linkedin;
        })
    });
  }

}
