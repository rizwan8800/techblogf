import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCategoryComponent } from './components/blog/blog-category/blog-category.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { BlogFormComponent } from './components/blog/blog-form/blog-form.component';
import { BlogItemComponent } from './components/blog/blog-item/blog-item.component';
import { SearchContainerComponent } from './components/blog/search-container/search-container.component';

const routes: Routes = [
  
  {
    path:'create-Blog',
    component:BlogFormComponent
  },
  {
    path:'',
    component:BlogItemComponent,
    runGuardsAndResolvers:"always"
    
  },
  {
    path:'blog-details',
    component:BlogDetailsComponent,
    runGuardsAndResolvers:"always"
  },
  {
    path:'category',
    component:BlogCategoryComponent,
    runGuardsAndResolvers:"always"
  },
  {
    path:'search',
    component:SearchContainerComponent,
    runGuardsAndResolvers:"always"
  }
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation : 'reload', useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
