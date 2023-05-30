import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  resources= false;
  constructor(){
    this.resources=true;
  }
  seats= [[1,2,],
          [5,6],
          [9,10],
          [13,14],
          [17,18],
          [19,20,],
          [23,24],
          [27,28],,];
  seats1= [[3,4,],
          [7,8],
          [11,12],
          [15,16],]
  seats2= [[21,22],
          [25,26],
          [29,30]]
  seats3= [[31,32,33,34,35],];

  reserved: number[] = [1,4,7,34,23];
  selected: number[] = [];
  selectedT: number[] = [];

  ticketPrice: number = 120;
  totalPrice: number = 0;

  //return status of each seat
  getStatus = (seatPos: number) => {
      if(this.reserved.indexOf(seatPos) !== -1) {
          return 'reserved';
      } else if(this.selected.indexOf(seatPos) !== -1) {
          return 'selected';
      } else {return ''}
  }
  //clear handler

  //click handler
  seatClicked = (seatPos: number) => {
      var index = this.selected.indexOf(seatPos);
      
      if(index !== -1) {
          // seat already selected, remove
          this.selected.splice(index, 1)
      } else {
          //push to selected array only if it is not reserved
          if(this.reserved.indexOf(seatPos) === -1)
              this.selected.push(seatPos);
      }
  }

  removeSelected(seatpos: number){
    this.selected.forEach((sel)=>{
      if (sel!=seatpos){
          this.selectedT.push(sel);
      }
    });
    this.selected=this.selectedT;
    this.selectedT=[];
  }
  //Buy button handler
}
