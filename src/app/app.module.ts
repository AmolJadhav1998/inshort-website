import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { ParentComponent } from './datacomunication/parent/parent.component';
import { ChildComponent } from './datacomunication/parent/child/child.component';
import { Parent1Component } from './datacom2/parent1/parent1.component';
import { Child1Component } from './datacom2/parent1/child1/child1.component';
import { Parent3Component } from './datacom3/parent3/parent3.component';
import { Child3Component } from './datacom3/parent3/child3/child3.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { GitcompComponent } from './gitcomp/gitcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    Parent3Component,
    Child3Component,
    FirstComponent,
    SecondComponent,
    GitcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
