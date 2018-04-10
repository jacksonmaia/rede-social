import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './post.model';
import { PostService } from "./post.service";

@Component({
  selector: 'app-inputPost',
  templateUrl: './inputPost.component.html'
})
export class InputPostComponent implements OnInit {
    id:number;
    nome:string = "";
    legenda:string = "";
    @Output() postar = new  EventEmitter();

    constructor(private postservice:PostService) {

    }
    ngOnInit() {
    }

    submeter(event){
        event.preventDefault();
        let posts = this.postservice.getPosts();
        let contador = posts.length;        
        let id = contador + 1; 
        let postagem:Post = new Post(id,this.nome, this.legenda,0);        
        this.postar.emit(postagem);
    }
}