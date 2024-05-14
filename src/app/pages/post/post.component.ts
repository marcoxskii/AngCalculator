import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { Post } from '../../Domain/post';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  post: Post = new Post()
  posts : any
  photos : any
  info : any
  message : any
  mensaje : any
  title : any
  
  constructor(private postService : PostService){}
  
  
  ngOnInit(){
    this.postService.getAllPost().subscribe(data => {
      this.posts = data
    })

    this.postService.getAllPhotos().subscribe(data => {
      this.photos = data
    })
  }

  mostrarInfo(msg: any) {
    const id = msg.id;
    const infoDiv = document.getElementById(`info-${id}`);
    if (infoDiv) {
        if (infoDiv.style.display === 'none') {
            infoDiv.style.display = 'block';
          } else {
              infoDiv.style.display = 'none';
          }
      }
  }

  enviarPost(title: any, msg: any) {
    console.log('Enviando mensaje:', title, msg);
    const post: Post = { title, msg };
    this.postService.enviarPost(this.post);
  }
  
}


