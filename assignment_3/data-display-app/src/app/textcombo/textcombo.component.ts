import { Component } from '@angular/core';

@Component({
  selector: 'app-textcombo',
  templateUrl: './textcombo.component.html',
  styleUrls: ['./textcombo.component.css']
})
export class TextcomboComponent {
  selectedValue: string = 'Textbox';
  options: string[] = ['Textbox', 'TextArea'];

}
