import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from 'src/app/constants/AppConstants';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.css']
})
export class BlogCategoryComponent implements OnInit {


  category:any = this.route.snapshot.params['value'];
  listOfBlogs:any = this.getListOfBlogs();

   

  constructor(private http:HttpClient, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  getListOfBlogs(){
    let resdata:any;
   this.http.get(`${AppConstants.BASE_URI}blog/v1/blog/category/${this.category}`)
   .subscribe(data => { resdata = data; this.listOfBlogs = data;});
   return resdata;
  }


  
  
}
