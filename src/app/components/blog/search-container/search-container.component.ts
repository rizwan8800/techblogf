import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from 'src/app/constants/AppConstants';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {

  searchContent:any = this.route.snapshot.params['searchContent'];
  listOfBlogs:any = this.getListOfBlogs();


  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getListOfBlogs(){
    let resdata:any;
   this.http.get(`${AppConstants.BASE_URI}blog/v1/blog/search/${this.searchContent}`)
   .subscribe(data => { resdata = data; this.listOfBlogs = data;});
   return resdata;
  }

}
