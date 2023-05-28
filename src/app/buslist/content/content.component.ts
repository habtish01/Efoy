import { Component } from '@angular/core';
import { SeatComponent } from '../seat/seat.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})
export class ContentComponent {

  constructor(public dialog: MatDialog) {}


}
