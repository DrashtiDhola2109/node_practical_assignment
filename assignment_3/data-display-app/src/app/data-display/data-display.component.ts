import { Component } from '@angular/core';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent {
  intValue = 42;
  stringValue = 'Hello, Angular!';
  dateValue = new Date();

}
