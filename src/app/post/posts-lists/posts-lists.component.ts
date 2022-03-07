import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';

import { PostsService } from '../../core/services/posts.service';
import { Post } from '../../shared/models/post.model';

@Component({
  templateUrl: './posts-lists.component.html',
  styleUrls: ['./posts-lists.component.scss'],
})
export class PostsListsComponent implements OnInit {

  posts$!: Observable<Array<Post>>;
  postsArrayOfObjects!: Array<Post>;
  postsArrayOfObjectsCopy!: Array<Post>;

  search!: FormGroup;

  constructor(
    public postSvc: PostsService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.search = this.fb.group(
      {serachByUserName: ['']}
    );


    this.posts$ = this.postSvc.getPostsWithMeta().pipe(
      map(posts => this.postsArrayOfObjects = this.postsArrayOfObjectsCopy = posts)
    );

    this.search.get('serachByUserName')?.valueChanges.subscribe(
      (value) => {
        this.findByUserName(value);
      });
  }

  findByUserName(userName: string = '') {

    this.postsArrayOfObjects = this.postsArrayOfObjectsCopy;

    if(userName !== '') {
      this.postsArrayOfObjects = this.postsArrayOfObjects.filter((post: Post)=>{
        return post.user?.name.toLowerCase().indexOf(userName.toLowerCase()) != -1;
      });
    }

  }
}
