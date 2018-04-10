import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  constructor(private postservice: PostService) { }

  ngOnInit() {
  }

  adicionar(post: Post){
    console.log(post);
    
    this.postservice.adicionarPost(post);
  }

}
