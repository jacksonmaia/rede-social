import { Component, OnInit, Input } from '@angular/core';
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


  constructor(private postservice:PostService) {

  }

  ngOnInit() {
  }
  
  curtir(post:Post): void{
    this.postservice.adicionarLike(post);
  }
  
  apagar(id:number): void{
    this.postservice.excluirPost(id);
  }

}
