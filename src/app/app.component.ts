import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AppConstants} from './constants/AppConstants'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myName:any = this.assignName();
  title = 'tech-blog';
  searchContent:any;
  categorieslist:any = this.getListOfCategories();
  getListOfCategories(){
   this.http.get(`${AppConstants.BASE_URI}blog/v1/blog/categories`)
      .subscribe(data => this.categorieslist = data);
  }


  assignName() {
    var name:any = localStorage.getItem("name");
    if(name  == "" || name == undefined || name == null){
      
       while(name == "" || name == null || name == undefined){
         name = prompt("enter your name");
       }
      localStorage.setItem("name", name);
    }
    return name;
  }


  constructor(private http: HttpClient, private router:Router){
    
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  changeCategory(value:any){
    localStorage.setItem("category", value);
    console.log(localStorage.getItem("category"));
  }


  }

  
  
  

