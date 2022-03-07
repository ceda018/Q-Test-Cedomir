import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post/post.component';
import { PostsListsComponent } from './post/posts-lists/posts-lists.component';

const routes: Routes = [
  {path: 'posts', component: PostsListsComponent},
  {path: 'post/:id', component: PostComponent},
  {path: '', redirectTo: '/posts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
