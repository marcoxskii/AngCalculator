import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CollectionReference, Firestore, addDoc, getDocs, query, collection } from '@angular/fire/firestore';
import { Post } from '../Domain/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  constructor(private http: HttpClient, private firestore: Firestore) { }
  
  getAllPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getAllPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

  getAllComments(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }

  enviarPost(post: Post) {
  addDoc(collection(this.firestore, 'post'), Object.assign({}, post))
    
  }

  getPost(){
    return getDocs(query(collection(this.firestore, 'post')))
  }

}
