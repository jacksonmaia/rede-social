import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService{
    private url: string = 'http://rest.learncode.academy/api/jacksonmaias/post';


    constructor(private http: Http){

    }   
 
    posts: Post[] = [];

    getPosts(){
        return this.http.get(this.url)
                .map((response: Response) => {
                    for(let i of response.json()){
                        this.posts.push(new Post(i.id, i.nome, i.legenda, i.qtdLikes))
                    }
                    return this.posts;
                })
                .catch((error: Response) => Observable.throw(error))
    }
    excluirPost(id: number){
        return this.http.delete(this.url + "/" + id)
        .map((response:Response) => response.text())
        .catch((error: Response) => Observable.throw(error));
    }



    adicionarPost(postagem:Post){
//        this.posts.push(postagem);
        return this.http.post(this.url, postagem)
        .map((response:Response) => response.json() )
        .catch((error: Response) => Observable.throw(error));
    }
    adicionarLike(postagem: Post){
        postagem.qtdLikes++;
        return this.http.put(this.url + '/' + postagem.id, postagem)
        .map((res: Response) => res.text())
        .catch((error: Response) => Observable.throw(error));
    }
}

