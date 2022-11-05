import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FirebaseService} from "../../../services/firebase.service";
import {FormProductDetailsComponent} from "../../formContent/form-product-details/form-product-details.component";
import {FormProductMainComponent} from "../../formContent/form-product-main/form-product-main.component";
import {newArray} from "@angular/compiler/src/util";
import {DataService} from "../../../services/data.service";

interface DataTypeProductDetails {
  data: '';
  content: '';
}
@Component({
  selector: 'app-content-product-details',
  templateUrl: './content-product-details.component.html',
  styleUrls: ['./content-product-details.component.scss']
})
export class ContentProductDetailsComponent implements OnInit {
  public  dataSearchKeyword: any[] = [];
  public itemOfPageArr = [5, 10, 15, 20, 25, 30];
  public keySearch: any;public temp: any;public isCheckNotication = true;
  public chooseItemOfPage = this.itemOfPageArr[0];  page = 1;
  public dataProductMain: any[] = [];
  public isHiddenArr: any[] = [];
  public dataAllProductDetails: any[] = [];

  public dataTypeProductDetails: any[] = [];
  constructor(public dialog: MatDialog, public firebaseService: FirebaseService, public dataService: DataService) {

    this.firebaseService.readFunctionalityObject('/productMain/productMainList').subscribe((res: any[]) => {
      this.dataProductMain = res;
      for (let i = 0; i < this.dataProductMain.length; i++) {
        this.isHiddenArr[i] = false;
      }
    })
    this.firebaseService.readFunctionalityList('/productDetails').subscribe((res: any[]) => {
      this.dataAllProductDetails = res;
      // console.log(this.dataAllProductDetails[0].productMain);
      this.dataTypeProductDetails.splice(0, this.dataTypeProductDetails.length);
      for (let i = 0; i < this.dataProductMain.length; i++) {
        this.dataTypeProductDetails[i] = [];
        for (let j = 0; j < this.dataAllProductDetails.length; j++) {
          // console.log(this.dataProductMain[i].link);
          // console.log(this.dataAllProductDetails[j].productMain);
          // console.log(this.dataAllProductDetails[j]);
          if (this.dataProductMain[i].link === this.dataAllProductDetails[j].productMain) {
            this.dataTypeProductDetails[i].push(this.dataAllProductDetails[j]);
          }
        }
        this.dataSearchKeyword[i] = JSON.parse(JSON.stringify(this.dataTypeProductDetails[i]));
      }
      // console.log(this.dataTypeProductDetails);

    })


  }

  ngOnInit(): void {
  }

  openFormProductDetails() {
    this.dialog.open(FormProductDetailsComponent, {
      height: '500px', width: '1000px'
    })
  }

  public showHidden(index: number) {
    // console.log(this.dataProductMain[index].link);
    // console.log(this.dataTypeProductDetails);

    for (let i = 0; i < this.isHiddenArr.length; i++) {
      this.isHiddenArr[i] = false;
    }
    this.isHiddenArr[index] = true;
  }
  updateCustomer(rowData: any, link: string){
    const dialogRef = this.dialog.open(FormProductDetailsComponent, {
      height:  '600px', width: '1000px'
    });
    dialogRef.componentInstance.isEdit = true;
    dialogRef.componentInstance.dataPatchValue = rowData;
    console.log(rowData);
    dialogRef.afterClosed().subscribe(res => {
      if (res  && res.data){
        this.firebaseService.updateFunctionalityList(res.data, link , rowData.idItem);
      }
    });
  }
  public searchKeyword(keyword: string, index: number): any{
    // console.log(keyword);
    this.dataSearchKeyword[index] = this.dataTypeProductDetails[index].filter((item: any) => {
      if (this.dataService.removeDauTV(item.productDetails.name).toLowerCase().match(keyword)){
        return item;
      }
    });
    // console.log(this.dataSearchKeyword);
  }
  public sortABC(index: number): any{
    // tslint:disable-next-line:only-arrow-functions typedef
    this.dataSearchKeyword[index] =  this.dataSearchKeyword[index].sort(function(a: { productDetails: { name: { toLowerCase: () => number; }; }; }, b: { productDetails: { name: { toLowerCase: () => number; }; }; }){
      if (a.productDetails.name.toLowerCase() < b.productDetails.name.toLowerCase()) { return -1; }
      if (a.productDetails.name.toLowerCase() > b.productDetails.name.toLowerCase()) { return 1; }
      return 0;
    });
  }
  public sortStar(index: number): any{
    // tslint:disable-next-line:only-arrow-functions typedef
    this.dataSearchKeyword[index] =  this.dataSearchKeyword[index].sort(function(a: { star: number; }, b: { star: number; }){
      if (a.star < b.star) { return -1; }
      if (a.star > b.star) { return 1; }
      return 0;
    }).reverse();
  }
  public sortDiscount(index: number): any{
    // tslint:disable-next-line:only-arrow-functions typedef
    this.dataSearchKeyword[index] = this.dataSearchKeyword[index].sort(function(a: { discount: number; }, b: { discount: number; }){
      if (a.discount < b.discount) { return -1; }
      if (a.discount > b.discount) { return 1; }
      return 0;
    });
  }
  public showAll(index: number): any{
    this.dataSearchKeyword[index] =  this.dataTypeProductDetails[index];
  }
  public returnCheckNotication(data: any): any{
    this.temp = data;
  }
  public openNotication(): any{
    this.isCheckNotication = false;
  }
  public closeNotication(): any{
    this.isCheckNotication = true;
  }
  public deleteDataCustomer(rowdata: any): any{
    // console.log('delete' + rowdata.idProduct);
    this.firebaseService.deleteFunctionality(rowdata, '/productDetails');
  }
}
