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
  posts: Post[] = this.postservice.getPosts();
  ngOnInit() {
  }

}
