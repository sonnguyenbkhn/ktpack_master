import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { ResultCartComponent} from "./result-cart/result-cart.component";

const routes: Routes = [
  { path: '', component: CartComponent },
  { path: 'cart-result', component: ResultCartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
