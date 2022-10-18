import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentdata:any;
  @Output() itemEvent = new EventEmitter<any>();

  childtoparent:any;

  constructor() { 
    this.childtoparent="This is the data from child to parent";
  }

  ngOnInit(): void {
  }

  senddatafromparent(){
    console.log("Hi");
    this.itemEvent.emit(this.childtoparent);
  }
}
