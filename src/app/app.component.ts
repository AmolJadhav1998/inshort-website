import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  checkflag:boolean=true;
  
  constructor(private router:Router){

  }
  navigatehome(){
    if(this.checkflag==true){
      // this.router.navigate(['contact']);
      this.router.navigateByUrl('contact')
    }
    else{
      // this.router.navigate(['error']);
    }
  }
}
