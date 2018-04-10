import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './post.model';
import { PostService } from "./post.service";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;  

  Botaoimage:String = "../../assets/img/foto.jpg";
  Botaoexcluir:String = "../../assets/img/excluir.png";
  Botaocurtir:String = "../../assets/img/curtir.png";

  @Output() apagar = new  EventEmitter();

  constructor(private postservice:PostService) {

  }

  ngOnInit() {
  }
  
  curtir(post:Post){
    this.postservice.adicionarLike(post)
    .subscribe((data)=>{console.log(data)},
    error => console.log(error));

  }
  
  apagarPost(post: Post){
    this.apagar.emit(post);
  }
  

}
