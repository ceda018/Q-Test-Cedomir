import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Post } from 'src/app/shared/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl: string;

  constructor( private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getPost(id: number) {
    const url = `${this.apiUrl}/post?id=${id}`;
    return this.http.get<Post>(url);
  }

  getPosts(){
    const url = `${this.apiUrl}/posts`;
    return this.http.get<Array<Post>>(url);
  }

  getPostsWithMeta(user = true, comments = true){
    let url = `${this.apiUrl}/posts`;

    if( user && !comments ) {
      url = url + '?_expand=user';
    } else if( !user && comments ) {
      url = url + '?_embed=comments';
    } else {
      url = url + '?_expand=user&_embed=comments';
    }

    return this.http.get<Array<Post>>(url);
  }


}
