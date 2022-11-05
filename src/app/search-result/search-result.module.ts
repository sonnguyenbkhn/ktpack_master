import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import {NgxPaginationModule} from "ngx-pagination";
import {NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FooterMainComponent} from "./footer-main/footer-main.component";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
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
  declarations: [SearchResultComponent, FooterMainComponent],
  exports: [
    FooterMainComponent
  ],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    NgxPaginationModule,
    NgbRatingModule,
    FormsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    NgxLoadingXModule.forRoot(ngxLoadingXConfig)
  ]
})
export class SearchResultModule { }
