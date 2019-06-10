import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostInterface } from '../../models/post';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(
    private postService: PostService, 
    private route: ActivatedRoute
    ) { }
  public post: PostInterface = {};

  ruta = null;
  dia = null;
  mes = null;
  anio = null;

  ngOnInit() {
    const idPost = this.route.snapshot.params['id'];
    this.getDetails(idPost);
  }

  getDetails(idPost: string): void{
    this.postService.getOnePost(idPost).subscribe(post => {
      this.post = post;
      this.dia = this.post.fechaDay;
      this.mesString(this.post.fechaMonth);
      this.anio = this.post.fechaYear;
    });
    
  }

  mesString(month: number): void{
    switch (month) {
      case 1:
        this.mes = "Enero";
        break;

      case 2:
        this.mes = "Febrero";
        break;

      case 3:
        this.mes = "Marzo";
        break;

      case 4:
        this.mes = "Abril";
        break;

      case 5:
        this.mes = "Mayo";
        break;

      case 6:
        this.mes = "Junio";
        break;

      case 7:
        this.mes = "Julio";
        break;

      case 8:
        this.mes = "Agosto";
        break;

      case 9:
        this.mes = "Setiembre";
        break;

      case 10:
        this.mes = "Octubre";
        break;

      case 11:
        this.mes = "Noviembre";
        break;

      case 12:
        this.mes = "Diciembre";
        break;
      
      default:
        // code...
        break;
    }
  }

}
