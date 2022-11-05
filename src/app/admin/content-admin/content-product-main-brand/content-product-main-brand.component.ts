import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormProductMainBrandComponent } from '../../formContent/form-product-main-brand/form-product-main-brand.component';

@Component({
  selector: 'app-content-product-main-brand',
  templateUrl: './content-product-main-brand.component.html',
  styleUrls: ['./content-product-main-brand.component.scss']
})
export class ContentProductMainBrandComponent implements OnInit {
  public dataProductMainBrand: any;
  public dataProductMainBrandList: any;
  constructor(public dialog: MatDialog, public firebaseService:FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.readFunctionalityObject('/productMainBrand').subscribe((res: any) => {
      this.dataProductMainBrand = res;
      console.log(res);
    })
    this.firebaseService.readFunctionalityObject('/productMainBrand/productMainBrandList').subscribe((res: any) => {
      this.dataProductMainBrandList = res;
    })
  }
  openFormProductMainBrand(){
      this.dialog.open(FormProductMainBrandComponent, {
        height: '600px', width: '1000px'
      })
  }
  editDataProductMainBrand(data: any){
    const dialogRef =   this.dialog.open(FormProductMainBrandComponent, {
      height: '600px', width: '1000px'
    })
    dialogRef.componentInstance.dataPatchValue = data;
    dialogRef.afterClosed().subscribe(res => {
      if(res && res.data){
        this.firebaseService.updateFunctionality(res.data, '/productMainBrand');
      }
    })
  }

}
