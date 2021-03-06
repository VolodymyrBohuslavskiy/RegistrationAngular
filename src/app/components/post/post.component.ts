import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];

  constructor(
    public postServ: PostService
  ) {
  }

  ngOnInit() {
    this.postServ.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }


}
