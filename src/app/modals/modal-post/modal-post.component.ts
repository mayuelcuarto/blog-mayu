import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { PostInterface } from '../../models/post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.css']
})
export class ModalPostComponent implements OnInit {

  constructor(public dataApi: DataApiService) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  ngOnInit() {
  }

  onSavePost(postForm: NgForm): void{
    if(postForm.value.id == null){
      // New
      console.log("userUid", this.userUid);
      postForm.value.userUid = this.userUid;
      this.dataApi.addPost(postForm.value);
    }else{
      // Update
      this.dataApi.updatePost(postForm.value);
    }
    postForm.resetForm();
    this.btnClose.nativeElement.click();
  }

  onCloseModal(postForm: NgForm): void{
    postForm.resetForm();
  }

}
