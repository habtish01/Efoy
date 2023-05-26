import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css'],
})
export class SearchBusComponent {
  constructor(private route: Router){}

  options: string [] = ["Addis Ababa", "Bahr Dar", "Debre Birhan", "Adama", "Debre Zeyt"];

  busList(){
      this.route.navigateByUrl('/bus-list');
  }
}
