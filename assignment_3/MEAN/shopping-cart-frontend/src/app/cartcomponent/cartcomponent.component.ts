import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cartcomponent',
  templateUrl: './cartcomponent.component.html',
  styleUrls: ['./cartcomponent.component.css']
})
export class CartcomponentComponent {
  cartItems: any[] = [];
  newItem: any = {
    name: '',
    price: 0,
    quantity: 0,
  };
  selectedItemId: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe((data: any) => {
      this.cartItems = data;
    });
  }

  selectCartItem(item: any) {
    this.newItem = { ...item };
    this.selectedItemId = item._id;
  }

  deleteCartItem(itemId: string) {
    this.cartService.deleteCartItem(itemId).subscribe((data: any) => {
      this.getCartItems();
    });
  }

}
