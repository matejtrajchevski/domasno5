import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Driver } from '../module/klasa';

import { CommonModule } from '@angular/common';
//import { EventEmitter } from 'stream';
@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent implements OnInit{
  constructor() { }

  @Input()
  ime:String='';
  @Input()
  vozac: Driver = {} as Driver;
  @Input()
  reden: Number=0;
  @Output()
  //sofer:Driver;

  cuci = new EventEmitter<any>();

  ngOnInit(){ 

  }
  klasi(){
    return{'poz':this.vozac.category=="BEGINER", 'course-card':true}
  }
  klik()
  {
    var link=this.vozac.iconUrl;
    window.open(link,"_blank");
    console.log("Me klikna");
    this.cuci.emit(this.vozac);
  }
  stiliziranje()
  {
    return{ 
    color: "green", 
    fontStyle: "italic", 
    fontSize: "20px",
    border: "2px black solid",
    borderRadius:"5px",
    width:"100px"

  }

  }
}
