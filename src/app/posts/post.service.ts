import { Post } from './post.model';

export class PostService {
    private posts: Post[] = [];

    getPosts(){
        return [...this.posts];
    }

    addPosts(title: string, content: string){
        const post: Post = {title, content };
        this.posts.push(post);
    }
}