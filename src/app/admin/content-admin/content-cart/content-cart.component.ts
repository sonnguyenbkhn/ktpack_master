import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../../services/firebase.service";
import {DataService} from "../../../services/data.service";
import {MatDialog} from "@angular/material/dialog";
import {FormProductDetailsComponent} from "../../formContent/form-product-details/form-product-details.component";
import {ContentCartFormComponent} from "./content-cart-form/content-cart-form.component";

@Component({
  selector: 'app-content-cart',
  templateUrl: './content-cart.component.html',
  styleUrls: ['./content-cart.component.scss']
})
export class ContentCartComponent implements OnInit {
  public dataSearchKeyword: any[] = [];
  public keySearch: any; public keySearchCode: any;
  public itemOfPageArr = [5, 10, 15, 20, 25, 30, 40];
  public chooseItemOfPage = this.itemOfPageArr[0];  page = 1;
  public dataAllCart: any[] = [];
  public dataTypeProductDetails: any[] = [];
  public dataProductMain: any[] = [];
  constructor(public firebaseService: FirebaseService, public dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.firebaseService.readFunctionalityList('/cart').subscribe((res: any[]) => {
      // this.dataAllCart.splice(0, this.dataAllCart.length);
      // console.log('resl',res.length);
      res.forEach((item, index) => {
        // console.log('res', Object.values(res[index]));
        this.dataAllCart.push(Object.values(res[index]));
        // console.log('res1', res[0][0]);
        // console.log('dataAllCart', this.dataAllCart);
        // console.log(this.dataAllCart[0][0].address);
        this.dataSearchKeyword = JSON.parse(JSON.stringify(this.dataAllCart));
      })



    })
  }
  public detailsCart(rowData: any, maDonHang: any): any{
    const dialogRef = this.dialog.open(ContentCartFormComponent, {
      height: '400px', width: '1000px'
    })
    dialogRef.componentInstance.dataPatchValue = rowData;
    dialogRef.componentInstance.dataPatchValue1 = maDonHang;
  }
  public searchKeyword(keyword: string): any{
    this.dataSearchKeyword.splice(0, this.dataSearchKeyword.length);
    this.dataAllCart.forEach((item, index) => {
      for(let i = 0; i < item.length - 1; i++){
          if(item[i].infoCustomer.phoneNumber === keyword){
            // console.log('da thay');
            this.dataSearchKeyword.push(item);
          }
      }
    })
    // console.log('dataSearchKeyword', this.dataSearchKeyword);
  }
  public searchKeywordCode(keywordCode: string): any{
    this.dataSearchKeyword.splice(0, this.dataSearchKeyword.length);
    this.dataAllCart.forEach((item, index) => {
      for(let i = 0; i < item.length; i++){
        if(item[item.length -  1] === '-' + keywordCode || item[item.length -  1] ===  keywordCode){
          this.dataSearchKeyword.push(item);
        }
        // console.log('items:', item[item.length -  1]);
      }
    })
    // console.log('dataSearchKeyword', this.dataSearchKeyword);
  }
  public showAll(): any{
    this.dataSearchKeyword = JSON.parse(JSON.stringify(this.dataAllCart));
  }
  // public deleteItemCart(code: any): any{
  //   console.log('code: ', code.toString().length);
  //   this.firebaseService.deleteFunctionalityCart('/cart', code);
  // }
}
