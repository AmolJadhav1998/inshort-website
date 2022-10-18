import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private message = new BehaviorSubject("This is default Message");
  currentdata = this.message.asObservable();
  constructor() { }

  setmessage(msg:any){
    this.message.next(msg);
    

  } 

  getmessage(){
    return this.currentdata;
  }
  
}
