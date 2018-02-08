import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this for routing
import { AboutComponent } from './about/about.component';  // Add this for routing


const routes: Routes = [
  { 
  path:'',
  component: HomeComponent
  },

  { 
    //id is route parameter
    path:'about/:id',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
