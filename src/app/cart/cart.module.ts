import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {FooterMainComponent} from "./footer-main/footer-main.component";
import { ResultCartComponent } from './result-cart/result-cart.component';
import { NgxLoadingXConfig, POSITION, SPINNER, NgxLoadingXModule } from 'ngx-loading-x';
const ngxLoadingXConfig: NgxLoadingXConfig = {
  show: false,
  bgBlur: 2,
  bgColor: 'rgba(40, 40, 40, 0.95)',
  bgOpacity: 5,
  bgLogoUrl: '',
  bgLogoUrlPosition: POSITION.topLeft,
  bgLogoUrlSize: 500,
  spinnerType: SPINNER.wanderingCubes,
  spinnerSize: 220,
  spinnerColor: '#dd0031',
  spinnerPosition: POSITION.centerCenter,
}
@NgModule({
    declarations: [CartComponent, FooterMainComponent, ResultCartComponent],
    exports: [
        FooterMainComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatInputModule,
      NgxLoadingXModule.forRoot(ngxLoadingXConfig)
    ]
})
export class CartModule { }
