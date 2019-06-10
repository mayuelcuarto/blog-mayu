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

  constructor(private postService: PostService, private route: ActivatedRoute) { }
  public posts = [];

  ngOnInit() {
  	const year = this.route.snapshot.params['year'];
  	const month = this.route.snapshot.params['month'];
  	this.getPostsByYearMonth(year, month);
  }

  getPostsByYearMonth(year: number, month: number): void{
  	this.postService.getPostsByYearMonth(year, month).subscribe(posts => {
  		this.posts = posts;
  		console.log("posts", posts);
  	});
  }

  mesString(month: number){
    switch (month) {
      case 1:
        return "Enero";
        break;

      case 2:
        return "Febrero";
        break;

      case 3:
        return "Marzo";
        break;

      case 4:
        return "Abril";
        break;

      case 5:
        return "Mayo";
        break;

      case 6:
        return "Junio";
        break;

      case 7:
        return "Julio";
        break;

      case 8:
        return "Agosto";
        break;

      case 9:
        return "Setiembre";
        break;

      case 10:
        return "Octubre";
        break;

      case 11:
        return "Noviembre";
        break;

      case 12:
        return "Diciembre";
        break;
      
      default:
        // code...
        break;
    }
  }
}
