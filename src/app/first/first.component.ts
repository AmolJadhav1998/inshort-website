import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
 samplefirstdata:any;
 data:any;
  constructor(private dataser : DataSharingService) { 
    this.dataser.getmessage().subscribe((res:any)=>{console.log(res) ; this.data = res;})
    
  }

  ngOnInit(): void {
  }

  senddtfromfirst(){
    this.samplefirstdata="Data send from first";
    this.dataser.setmessage(this.samplefirstdata);
  }
}
