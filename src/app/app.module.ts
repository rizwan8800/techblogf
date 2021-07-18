import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogFormComponent } from './components/blog/blog-form/blog-form.component';
import { BlogItemComponent } from './components/blog/blog-item/blog-item.component';
import { BlogContentComponent } from './components/blog/blog-content/blog-content.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { BlogCategoryComponent } from './components/blog/blog-category/blog-category.component';
import { CommentComponent } from './components/comment/comment/comment.component';
import { SearchContainerComponent } from './components/blog/search-container/search-container.component';
import { DateTimePipePipe } from './Pipes/date-time-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlogFormComponent,
    BlogItemComponent,
    BlogContentComponent,
    BlogDetailsComponent,
    BlogCategoryComponent,
    CommentComponent,
    SearchContainerComponent,
    DateTimePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
