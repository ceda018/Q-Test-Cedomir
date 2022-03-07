import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { PostsService } from '../../core/services/posts.service';
import { Post } from '../../shared/models/post.model';

@Component({
  templateUrl: './posts-lists.component.html',
  styleUrls: ['./posts-lists.component.scss'],
})
export class PostsListsComponent implements OnInit {

  posts$!: Observable<Array<Post>>;
  postsObject!: Array<Post>;

  constructor( public postSvc: PostsService) {}

  ngOnInit(): void {
    this.posts$ = this.postSvc.getPostsWithMeta();
  }
}
