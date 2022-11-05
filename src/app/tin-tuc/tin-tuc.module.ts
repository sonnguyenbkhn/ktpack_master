import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TinTucRoutingModule } from './tin-tuc-routing.module';
import { TinTucComponent } from './tin-tuc.component';
import { TinTucContentComponent } from './tin-tuc-content/tin-tuc-content.component';


@NgModule({
  declarations: [TinTucComponent, TinTucContentComponent],
  imports: [
    CommonModule,
    TinTucRoutingModule
  ]
})
export class TinTucModule { }
