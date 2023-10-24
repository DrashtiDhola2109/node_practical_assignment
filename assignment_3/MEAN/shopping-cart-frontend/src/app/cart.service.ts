// src/app/cart.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:3000/cart'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getCartItems() {
    console.log(this.apiUrl);
    return this.http.get(this.apiUrl);
  }

  createCartItem(item: any) {
    return this.http.post(this.apiUrl, item);
  }

  updateCartItem(id: string, item: any) {
    return this.http.put(`${this.apiUrl}/${id}`, item);
  }

  deleteCartItem(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

