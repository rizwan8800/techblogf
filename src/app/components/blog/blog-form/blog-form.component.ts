import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/AppConstants';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  blogAddSuccess:any = "none"
  isSubmitted:string = "";
  category!: string;
  heading!: string;
  content!: string;
 postedBy = localStorage.getItem("name");
  files: File[] = [];
  resData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  onSubmit() {
    this.isSubmitted = "disabled"
    let payload = new FormData();
    payload.append('postedBy', this.postedBy+"");
    payload.append('content', this.content);
    payload.append('category', this.category);
    payload.append('heading', this.heading);
for(var i=0 ; i<this.files.length; i++){
  console.log(this.files[i]);
  payload.append('files[]', this.files[i]);
}


    this.http
      .post(`${AppConstants.BASE_URI}blog/v1/blog`,
        payload
      ).subscribe((data) => {
      });
      this.isSubmitted = ""
      this.blogPostSuccess();
      this.category = "";
      this.heading = "";
      this.content = "";
      this.files = [];
  }


  blogPostSuccess(){
    if(this.blogAddSuccess == 'none'){
      this.blogAddSuccess = 'block'
      setTimeout(()=>{this.blogAddSuccess = 'none'},2000);
    }else{
      this.blogAddSuccess = 'none'
    }
  }


  save(event:any){
    const selectedFiles:File[] = event.target.files;
    for(var i=0; i< selectedFiles.length; i++){
      this.files.push(selectedFiles[i]);
    }
  }

}
