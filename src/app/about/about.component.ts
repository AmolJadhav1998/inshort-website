import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
     rollNo:any;
     Name:any;
  constructor(private actRouter:ActivatedRoute) {

    console.log(this.actRouter.snapshot.params);
    // console.log(this.actRouter.snapshot.params['Rollno']);
    // console.log(this.actRouter.snapshot.params['Name']);
    
    console.log(this.actRouter.paramMap);
    this.actRouter.paramMap.subscribe((res:any)=>
    {
      console.log(res);
      this.rollNo=res.params.rollno;
      this.Name=res.params.name;

    })
   }

  ngOnInit(): void {
  }

}
