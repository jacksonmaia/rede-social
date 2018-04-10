import { Component, OnInit } from '@angular/core';
import { Post } from './../post/post.model';
import { PostService } from "./../post/post.service";

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {
  constructor(private postservice:PostService ) {

  }
  posts: Post[];
  ngOnInit() {
    this.getPosts();    
  }

  getPosts(){
    this.postservice.getPosts()
    .subscribe((data) => {
      this.posts = data;
      console.log(data);
    }, (error) => console.log(error));
  }

  apagarpostagem(e){
    this.postservice.excluirPost(e.id)
    .subscribe((data)=>{console.log(data);
    this.getPosts();
    },
    error => console.log(error));
    console.log(e.id)
  
  }

}
