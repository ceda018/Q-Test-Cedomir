import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable, switchMap } from 'rxjs';

import { PostsService } from 'src/app/core/services/posts.service';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postId!: number;
  post$!: Observable<Post>;

  post!: Post;

  constructor(public postSvc: PostsService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.postId = Number(params.get('id'));
        return this.postSvc.getPost(this.postId);
      })
    );

  }

}
