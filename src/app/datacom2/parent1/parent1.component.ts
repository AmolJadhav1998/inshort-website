import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  datafromparenttochild:any;

  constructor() {
    this.datafromparenttochild="This is the data from parent to child";
   }

  ngOnInit(): void {
  }

  emitdatafromchild(evt:any){
    console.log(evt);

  }
}

