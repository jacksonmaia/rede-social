import { Component, OnInit } from '@angular/core';
import { Post } from './../post/post.model';
import { PostService } from "./../post/post.service";

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {
  posts: Post[];

  constructor(private postservice:PostService ) {

  }

  ngOnInit() {
    this.getAll();    
  }

  getAll(){
    this.postservice.getPosts()
    .subscribe((data) => {
      this.posts = data;
    }, (error) => console.log(error));
  }

  apagarpostagem(post:Post){    
    this.postservice.excluirPost(post.id)
    .subscribe(data => {
      console.log(data);
      this.getAll();
    },
    error => console.log(error)); 
  }

}
