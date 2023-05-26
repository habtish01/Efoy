import { Component } from '@angular/core';
import { SeatComponent } from '../seat/seat.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})
export class ContentComponent {

  constructor(public dialog: MatDialog) {}

  allComplete = true;
  panelOpenState = true;
  buses:  any []= [
    {name: 'Odda', completed: false, color: 'primary'},
    {name: 'Abay', completed: false, color: 'accent'},
    {name: 'Ethio', completed: false, color: 'warn'},
    {name: 'Geda', completed: false, color: 'warn'},
    {name: 'Golden', completed: false, color: 'amber'},
  ]

  updateAllComplete() {
    this.allComplete = this.buses != null && this.buses.every(t => t.completed);
  }

  openDialog() {
    const dialogRef = this.dialog.open(SeatComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
