import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartManagementComponent } from './cart/cart.component';
import { CartcomponentComponent } from './cartcomponent/cartcomponent.component';

const routes: Routes = [
  { path: 'cart', component: CartcomponentComponent },
  { path: 'cart-management', component: CartManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
