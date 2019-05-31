import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { PostInterface } from '../models/post';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) {}
  private postsCollection: AngularFirestoreCollection<PostInterface>;
  private posts: Observable<PostInterface[]>;
  private postDoc: AngularFirestoreDocument<PostInterface>;
  private post: Observable<PostInterface>;
  public selectedPost: PostInterface = {
    id: null
  };

  getAllPosts(){
    this.postsCollection = this.afs.collection<PostInterface>('posts');
  	return this.posts = this.postsCollection.snapshotChanges()
  	.pipe(map(changes => {
  		return changes.map(action => {
  			const data = action.payload.doc.data() as PostInterface;
  			data.id = action.payload.doc.id;
  			return data;
  		});
  	}));
  }

  getAllPostsOffers() {
    this.postsCollection = this.afs.collection('posts', ref => ref.where('oferta', '==', '1'));
    return this.posts = this.postsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as PostInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOnePost(idPost: string){
    this.postDoc = this.afs.doc<PostInterface>(`posts/${idPost}`);
    return this.post = this.postDoc.snapshotChanges()
    .pipe(map(action => {
      if(action.payload.exists == false){
        return null;
      }else{
        const data = action.payload.data() as PostInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addPost(post: PostInterface): void {
    this.postsCollection.add(post);
  }

  updatePost(post: PostInterface) : void {
    let idPost = post.id;
    this.postDoc = this.afs.doc<PostInterface>(`posts/${idPost}`);
    this.postDoc.update(post);
  }

  deletePost(idPost: string) : void {
    this.postDoc = this.afs.doc<PostInterface>(`posts/${idPost}`);
    this.postDoc.delete();
  }

}
