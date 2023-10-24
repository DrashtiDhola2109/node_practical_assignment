import { Component } from '@angular/core';

@Component({
  selector: 'app-userform-display',
  templateUrl: './userform-display.component.html',
  styleUrls: ['./userform-display.component.css']
})
export class UserformDisplayComponent {
  userData = {
    firstName: '',
    lastName: '',
    email: '',
  };

  onSubmit() {
    // Handle form submission logic here
    console.log(this.userData);
  }

}
