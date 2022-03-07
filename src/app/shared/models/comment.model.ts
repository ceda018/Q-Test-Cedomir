import { User } from "./user.model";

export class Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
  user?: User | null = null;

  constructor(id: number, postId: number, name: string, email: string, body: string, user?: User | null) {
    this.id = id;
    this.postId = postId;
    this.name = name;
    this.email = email;
    this.body = body;
    this.user = user;
  }

}
