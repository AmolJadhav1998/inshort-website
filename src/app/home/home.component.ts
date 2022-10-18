import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  
  studentdata:any=[{rollno:1,name:'Amol',marks:70},
                   {rollno:2,name:'Kiran',marks:80}]

                   ngOnInit(): void {
                  }

                   showstudentdetails(d:any){
                    console.log(d);
                    let rollno=d.rollno;
                    let name=d.name;
                    this.router.navigateByUrl(`about/${rollno}/${name}`);
                   }

  

}
