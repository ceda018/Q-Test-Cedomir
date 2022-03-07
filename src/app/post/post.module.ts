import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PostsListsComponent } from './posts-lists/posts-lists.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    PostsListsComponent,
    PostComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PostModule { }
