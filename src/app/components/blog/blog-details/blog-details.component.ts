import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppConstants } from 'src/app/constants/AppConstants';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  showCommentBox = "none";
  uuid:string = this.route.snapshot.params['uuid']
  blog:any = this.getBlogByUUid();
  isLiked = false;
  isDisliked = false;

  commentContent:any
  commentedBy:any = localStorage.getItem("name");

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
  }
  getBlogByUUid(){
    let resdata;
    this.http.get(`${AppConstants.BASE_URI}blog/v1/blog/${this.uuid}`,).subscribe(data => {
      this.blog = data;
      resdata = data;
    }
    );
    return resdata;
  }

  showBox(){
    if(this.showCommentBox == "none"){
      this.showCommentBox = 'block';
    }else{
      this.showCommentBox = 'none'
    }

  }

  likeDislike(value:string){
    if(value == 'like'){
    if(this.isLiked == false){
      this.blog.likesCount++;
      this.isLiked = true;
      this.sendLikeDislikeData('like');
    }else{
      this.blog.likesCount--;
      this.isLiked = false;
      this.sendLikeDislikeData('unlike');
    }}else if(value =='dislike'){
    if(this.isDisliked == false){
      this.blog.dislikesCount++;
      this.isDisliked = true;
      this.sendLikeDislikeData('dislike');
    }else{
      this.blog.dislikesCount--;
      this.isDisliked = false;
      this.sendLikeDislikeData('undislike');
    }
  }}

  sendLikeDislikeData(flag:any){
    this.http.get(`${AppConstants.BASE_URI}blog/v1/blog/${flag}/${this.uuid}`,).subscribe(data => {});  
  }


  commentSubmit(){
    var payload = new FormData();
    payload.append("commentedBy",this.commentedBy);
    payload.append("content",this.commentContent);
    this.http.post(`${AppConstants.BASE_URI}comment/v1/comment/${this.uuid}`,payload).subscribe(
      data => console.log(data)
    )
  }

}
