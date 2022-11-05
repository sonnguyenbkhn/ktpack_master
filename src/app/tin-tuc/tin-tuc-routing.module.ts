import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TinTucComponent } from './tin-tuc.component';
import {TinTucContentComponent} from "./tin-tuc-content/tin-tuc-content.component";

const routes: Routes = [
  { path: '', component: TinTucComponent , children: [
      {path: ':tin-tuc-content', component: TinTucContentComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TinTucRoutingModule { }
