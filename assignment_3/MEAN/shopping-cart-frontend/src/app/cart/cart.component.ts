// src/app/cart-management/cart-management.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-management',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartManagementComponent implements OnInit {
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

  createCartItem() {
    this.cartService.createCartItem(this.newItem).subscribe((data: any) => {
      this.getCartItems();
    });
  }

  updateCartItem() {
    this.cartService
      .updateCartItem(this.selectedItemId, this.newItem)
      .subscribe((data: any) => {
        this.getCartItems();
      });
  }

  deleteCartItem(itemId: string) {
    this.cartService.deleteCartItem(itemId).subscribe((data: any) => {
      this.getCartItems();
    });
  }

  selectCartItem(item: any) {
    this.newItem = { ...item };
    this.selectedItemId = item._id;
  }

  clearSelection() {
    this.newItem = {
      name: '',
      price: 0,
      quantity: 0,
    };
    this.selectedItemId = '';
  }
}

