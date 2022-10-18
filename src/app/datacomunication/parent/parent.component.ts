import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  datafromprenttochild:any;
  constructor() { 
    this.datafromprenttochild="This is the data from perent to child";
  }
  
  ngOnInit(): void {
  }
  emitdatafromchild(evt:any){
    console.log("This is custom Event");
    console.log(evt);

  }
}
