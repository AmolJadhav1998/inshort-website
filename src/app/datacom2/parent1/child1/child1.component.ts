import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
    @Input() parentdata:any;
    @Output() itemEvent=new EventEmitter<any>();

    childtoparent:any;
  constructor() { 
    this.childtoparent="This is data child to parent";
  }

  ngOnInit(): void {
  }

  senddatafromparent(){
    console.log("hi");
    this.itemEvent.emit(this.childtoparent);
  }
}
