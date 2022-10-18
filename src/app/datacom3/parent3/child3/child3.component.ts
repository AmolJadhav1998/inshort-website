import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  @Input() parentdata:any;
  @Output() Event1 = new EventEmitter<any>()

  parentdatatochild:any;

  constructor() { 
    this.parentdatatochild="This is data from child to parent";
  }

  ngOnInit(): void {
  }

  childtoparent(){
    console.log("Hiiii");
    this.Event1.emit(this.parentdatatochild);
  }
}
