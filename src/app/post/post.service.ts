import { Injectable } from '@angular/core';
import { Post } from './post.model';
@Injectable()
export class PostService{
    posts: Post[] = [
        new Post(1, "Jackson", "Tão natural quanto luz do dia", 0),
        new Post(2, "Pereira", "PoucaZideia", 0),
        new Post(3, "Jordão", "Aiin pai para", 0),
        new Post(4, "DjBlack", "pen drive do sucesso", 0),
        ];

    adicionarPost(post:Post): void{
        this.posts.push(post);
    }
    excluirPost(id:number): Post{
        
        return null
    }
    adicionarLike(post: Post):void{
         
        post.qtdLikes++;
        console.log(post);
    }
    getPosts(){
        return this.posts;
    }
}

