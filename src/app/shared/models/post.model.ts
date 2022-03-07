import { Comment } from "./comment.model";
import { User } from "./user.model";

export class Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  comments?: Array<Comment> | null = null;
  user?: User | null = null;

  constructor(id: number, userId: number, title: string, body: string, comments?: Array<Comment>, user?: User) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
    this.comments = comments;
    this.user = user;
  }

}
