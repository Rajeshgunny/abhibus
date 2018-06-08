import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  

  constructor(private location: Location) { }

  ngOnInit() {
  }

  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];
  selval="";
  isavailable=false;
  changemonths(event) {
    this.selval=event.target.value;
    this.isavailable=true;
 }

 goBack(): void {
  this.location.back();
}

}
