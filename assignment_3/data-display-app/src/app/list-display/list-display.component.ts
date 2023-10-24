import { Component } from '@angular/core';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent {
  items = ['701-fullstack', '702-.net', '703-se', '704-ot'];
}
