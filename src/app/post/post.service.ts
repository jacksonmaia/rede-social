import { Injectable } from '@angular/core';
import { Post } from './post.model';
@Injectable()
export class PostService{
    posts: Post[] = [
        new Post(0, "Jackson", "Tão natural quanto luz do dia", 0),
        new Post(1, "Pereira", "PoucaZideia", 0),
        new Post(2, "Jordão", "Aiin pai para", 0),
        new Post(3, "DjBlack", "pen drive do sucesso", 0),
        ];

    adicionarPost(post:Post): void{
        this.posts.push(post);
    }
    excluirPost(id: number): void{
        this.posts.forEach(element => {
            if(element.id == id){
                this.posts.splice(this.posts.indexOf(this.posts[element.id]), 1);
            }
         });

    }
    adicionarLike(post: Post):void{
        post.qtdLikes++;
    }
    getPosts(){
        return this.posts;
    }
}

