import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GioiThieuRoutingModule } from './gioi-thieu-routing.module';
import { GioiThieuComponent } from './gioi-thieu.component';
import { FooterMainChildComponent } from './footer-main-child/footer-main-child.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [GioiThieuComponent, FooterMainChildComponent],
  imports: [
    CommonModule,
    GioiThieuRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class GioiThieuModule { }
