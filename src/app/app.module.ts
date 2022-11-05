import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { ProductMainBrandComponent } from './product-main-brand/product-main-brand.component';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { FormLoginComponent } from './form-login/form-login.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {NgxPaginationModule} from 'ngx-pagination';
import {FooterMainComponent} from './footer-main/footer-main.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { IndexMainMobileComponent } from './index-main-mobile/index-main-mobile.component';
import { NgxLoadingXConfig, POSITION, SPINNER, NgxLoadingXModule } from 'ngx-loading-x';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
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
};
@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    ProductDetailsComponent,
    ProductMainComponent,
    ProductMainBrandComponent,
    HeaderComponent,
    FormLoginComponent,
    FooterMainComponent,
    IndexMainMobileComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ktpack-plastic'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatIconModule,
    FormsModule,
    MatExpansionModule,
    CarouselModule,
    MatBadgeModule,
    MatListModule,
    NgxPaginationModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatProgressBarModule,
    NgxLoadingXModule.forRoot(ngxLoadingXConfig),
    NgbRatingModule

  ],
  providers: [],
  exports: [
    FooterMainComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
