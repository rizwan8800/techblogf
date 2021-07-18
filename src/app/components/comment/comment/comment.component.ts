import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/AppConstants';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment:any;
  @Input() paddingLeft:any;
  isLiked = false;
  isDisliked = false;
  constructor(private http: HttpClient) { }

  isReplyBoxShown = "none"

  replyContent:any = "";

  ngOnInit(): void {
  }

  likeDislike(value:any){
    if(value == 'like'){
    if(this.isLiked == false){
      this.comment.likesCount++;
      this.isLiked = true;
      this.sendLikeDislikeData('like');
    }else{
      this.comment.likesCount--;
      this.isLiked = false;
      this.sendLikeDislikeData('unlike');
    }}else if(value == 'dislike'){

    if(this.isDisliked== false){
      this.comment.dislikesCount++;
      this.isDisliked = true;
      this.sendLikeDislikeData('dislike');
    }else{
      this.comment.dislikesCount--;
      this.isDisliked = false;
      this.sendLikeDislikeData('undislike');
    }
  }}


  sendLikeDislikeData(flag:any){
    this.http.get(`${AppConstants.BASE_URI}comment/v1/comment/${flag}/${this.comment.commentUuid}`,).subscribe(data => {});  
  }

  replyBox(){
    if(this.isReplyBoxShown == "none"){
      this.isReplyBoxShown = "block"
    }else{
      this.isReplyBoxShown = "none"
    }
  }

name:any = localStorage.getItem("name")

  submitReply(){
    let data = new FormData();
    data.append("content",this.replyContent);
    data.append("commentedBy",this.name);
    this.http.post(`${AppConstants.BASE_URI}comment/v1/reply/${this.comment.commentUuid}`,data).subscribe(data => {}); 
  }
}
