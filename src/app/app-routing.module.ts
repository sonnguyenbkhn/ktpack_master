import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductMainComponent} from "./product-main/product-main.component";
import {ProductMainBrandComponent} from "./product-main-brand/product-main-brand.component";
import {TrangChuComponent} from "./trang-chu/trang-chu.component";
import {ProductDetailsComponent} from './product-details/product-details.component';
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  { path: 'admin',canActivate: [AuthGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), },
  { path: 'trang-chu',component: TrangChuComponent},
  { path: 'search-result', loadChildren: () => import('./search-result/search-result.module').then(m => m.SearchResultModule) },
  { path: 'gioi-thieu', loadChildren: () => import('./gioi-thieu/gioi-thieu.module').then(m => m.GioiThieuModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'tin-tuc', loadChildren: () => import('./tin-tuc/tin-tuc.module').then(m => m.TinTucModule) },
  { path: ':productMains', component: ProductMainComponent,
    children: [
      { path: ':productMainBrands', component: ProductMainBrandComponent,
        children: [
          {path: ':productDetails', component: ProductDetailsComponent}
        ]
      }
    ]},


  {path: '**', redirectTo: '/trang-chu', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
