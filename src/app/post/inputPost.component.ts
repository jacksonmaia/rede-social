import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './post.model';
import { PostService } from "./post.service";

@Component({
  selector: 'app-inputPost',
  templateUrl: './inputPost.component.html'
})
export class InputPostComponent implements OnInit {
    id:string = "";
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
        let postagem:Post = new Post(this.id,this.nome, this.legenda,0); 
        console.log(postagem);
        this.postar.emit(postagem);
    }
}