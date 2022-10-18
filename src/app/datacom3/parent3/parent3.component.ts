import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {

  childdata:any;
  constructor() { 
    this.childdata="This is data from parent to child";
  }

  ngOnInit(): void {
  }

  emitdatafromchild(evt:any){
    console.log(evt);
  }
}
