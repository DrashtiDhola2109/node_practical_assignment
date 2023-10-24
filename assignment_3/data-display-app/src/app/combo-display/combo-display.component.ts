import { Component } from '@angular/core';

@Component({
  selector: 'app-combo-display',
  templateUrl: './combo-display.component.html',
  styleUrls: ['./combo-display.component.css']
})
export class ComboDisplayComponent {
  selectedValue: string = 'Surat';
  options: string[] = ['Surat', 'Ahmedabad', 'Vadodara'];

}
