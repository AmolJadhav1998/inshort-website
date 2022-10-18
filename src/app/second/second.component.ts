import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  sampleseconddata:any;
  data:any;
  constructor(private datase : DataSharingService,private router:Router) {
    this.datase.getmessage().subscribe((res:any)=>{console.log(res);this.data=res;})
   }

  ngOnInit(): void {
  }

  senddtfromsecond(){
    let dt="This is the data from second Component to first";
    this.datase.setmessage(dt);
    this.router.navigate(['first']);
  }
}
