import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GioiThieuComponent } from './gioi-thieu.component';

const routes: Routes = [{ path: '', component: GioiThieuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GioiThieuRoutingModule { }
