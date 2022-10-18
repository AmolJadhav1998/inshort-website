import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Parent1Component } from './datacom2/parent1/parent1.component';
import { Parent3Component } from './datacom3/parent3/parent3.component';
import { ParentComponent } from './datacomunication/parent/parent.component';
import { ErrorComponent } from './error/error.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about/:rollno/:name',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'parent',component:ParentComponent},
  {path:'parent1',component:Parent1Component},
  {path:'parent3',component:Parent3Component},
  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent},
  {path:'**',component:ErrorComponent},
  // {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

