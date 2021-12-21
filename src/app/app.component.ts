import { Component } from '@angular/core';
import NepaliDate from 'nepali-date-converter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dateconverter';
  day = '';
  month='';
  year='';
  type = '';
  constructor(){
    
    this.type = "ad"
  } 
  onTypeChanged(event:any){
    if(event === 'bs'){
      console.log();
      this.getBsDate()
    }else{
      this.getAdDate()
    }
  }

  getBsDate(){
    const today = NepaliDate.fromAD(new Date(Number(this.year), Number(this.month)-1,Number(this.day)))
    console.log(today.getBS());
    this.year = today.getBS().year.toString();
    this.month = (today.getBS().month+1).toString()
    this.day = today.getBS().date.toString()
  }

  getAdDate(){
    const today = new NepaliDate(Number(this.year), Number(this.month)-1,Number(this.day))
    console.log(today.getAD());
    this.year = today.getAD().year.toString();
    this.month = (today.getAD().month+1).toString()
    this.day = today.getAD().date.toString()
  }
}
