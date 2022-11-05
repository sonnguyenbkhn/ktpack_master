import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormProductMainComponent } from './formContent/form-product-main/form-product-main.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ContentAdminComponent } from './content-admin/content-admin.component';
import { ContentProductMainComponent } from './content-admin/content-product-main/content-product-main.component';
import { ContentProductMainBrandComponent } from './content-admin/content-product-main-brand/content-product-main-brand.component';
import {FormProductMainBrandComponent} from './formContent/form-product-main-brand/form-product-main-brand.component';
import { ContentProductDetailsComponent } from './content-admin/content-product-details/content-product-details.component';
import { FormProductDetailsComponent } from './formContent/form-product-details/form-product-details.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatOptionModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { ContentInfoCompanyComponent } from './content-admin/content-info-company/content-info-company.component';
import { FormInfoCompanyComponent } from './formContent/form-info-company/form-info-company.component';
import { ContentGioiThieuComponent } from './content-admin/content-gioi-thieu/content-gioi-thieu.component';
import { FormGioiThieuComponent } from './formContent/form-gioi-thieu/form-gioi-thieu.component';
import { FormTintucMainComponent } from './formContent/form-tintuc-main/form-tintuc-main.component';
import {ContentTintucMainComponent} from './content-admin/content-tintuc-main/content-tintuc-main.component';
import { ContentLienHeComponent } from './content-admin/content-lien-he/content-lien-he.component';
import { FormLienheComponent } from './formContent/form-lienhe/form-lienhe.component';
import { ContentTrangChuComponent } from './content-admin/content-trang-chu/content-trang-chu.component';
import { FormTrangChuComponent } from './formContent/form-trang-chu/form-trang-chu.component';
import { ContentCartComponent } from './content-admin/content-cart/content-cart.component';
import { ContentCartFormComponent } from './content-admin/content-cart/content-cart-form/content-cart-form.component';
import { ContentAccountComponent } from './content-admin/content-account/content-account.component';
import { FormAccountComponent } from './formContent/form-account/form-account.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ContentTintucDetailsComponent } from './content-admin/content-tintuc-details/content-tintuc-details.component';
import { FormTintucDetailsComponent } from './formContent/form-tintuc-details/form-tintuc-details.component';


@NgModule({
  declarations: [
    AdminComponent,
    FormProductMainComponent,
    ContentAdminComponent,
    ContentProductMainComponent,
    ContentProductMainBrandComponent,
    FormProductMainBrandComponent,
    ContentProductDetailsComponent,
    FormProductDetailsComponent,
    ContentInfoCompanyComponent,
    FormInfoCompanyComponent,
    ContentGioiThieuComponent,
    FormGioiThieuComponent,
    FormTintucMainComponent,
    ContentTintucMainComponent,
    ContentLienHeComponent,
    FormLienheComponent,
    ContentTrangChuComponent,
    FormTrangChuComponent,
    ContentCartComponent,
    ContentCartFormComponent,
    ContentAccountComponent,
    FormAccountComponent,
    ContentTintucDetailsComponent,
    FormTintucDetailsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AngularEditorModule,
    NgxPaginationModule,
    MatOptionModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
  ]
})
export class AdminModule { }
