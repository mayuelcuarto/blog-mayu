import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostInterface } from '../../models/post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.css']
})
export class ModalPostComponent implements OnInit {

  constructor(public postService: PostService) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  today = new Date();
  ngOnInit() {
  }

  onSavePost(postForm: NgForm): void{
    if(postForm.value.id == null){
      // New
      postForm.value.userUid = this.userUid;
      postForm.value.createdAt = this.today;
      let fechaDay = postForm.value.fecha.day;
      let fechaMonth = postForm.value.fecha.month;
      let fechaYear = postForm.value.fecha.year;
      postForm.value.fechaDay = fechaDay;
      postForm.value.fechaMonth = fechaMonth;
      postForm.value.fechaYear = fechaYear;
      this.postService.addPost(postForm.value);
    }else{
      // Update
      let fechaDay = postForm.value.fecha.day;
      let fechaMonth = postForm.value.fecha.month;
      let fechaYear = postForm.value.fecha.year;
      postForm.value.fechaDay = fechaDay;
      postForm.value.fechaMonth = fechaMonth;
      postForm.value.fechaYear = fechaYear;
      this.postService.updatePost(postForm.value);
    }
    postForm.resetForm();
    this.btnClose.nativeElement.click();
  }

  onCloseModal(postForm: NgForm): void{
    postForm.resetForm();
  }

}
