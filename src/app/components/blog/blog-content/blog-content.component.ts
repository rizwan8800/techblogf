import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/AppConstants';
import { DateTimePipePipe } from 'src/app/Pipes/date-time-pipe.pipe';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {

  
  
  @Input() blog: any;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
