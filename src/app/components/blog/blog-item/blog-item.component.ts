import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/AppConstants';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  
  listOfBlogs:any = this.getListOfBlogs();

   getListOfBlogs(){
     let resdata:any;
    this.http.get(`${AppConstants.BASE_URI}blog/v1/blogs`)
    .subscribe(data => { resdata = data; this.listOfBlogs = data;});
    return resdata;
   }

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

 

}
