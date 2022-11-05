import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FirebaseService} from "../../../services/firebase.service";
import {DataService} from "../../../services/data.service";
import { FormTintucDetailsComponent} from "../../formContent/form-tintuc-details/form-tintuc-details.component";
import {FormProductDetailsComponent} from "../../formContent/form-product-details/form-product-details.component";

@Component({
  selector: 'app-content-tintuc-details',
  templateUrl: './content-tintuc-details.component.html',
  styleUrls: ['./content-tintuc-details.component.scss']
})
export class ContentTintucDetailsComponent implements OnInit {
  public dataTintucMain: any[] = [];
  public dataTintucDetails: any[] = [];
  public dataTypeTintucDetails: any[] = [];
  public isHiddenArr: any[] = [];
  public temp: any;public isCheckNotication = true;
  constructor(public dialog: MatDialog, public firebaseService: FirebaseService, public dataService: DataService) {
    this.firebaseService.readFunctionalityObject('/tin-tuc-main/formTintucList').subscribe((res: any[]) => {
      this.dataTintucMain = res;
      console.log('dataTintucMain', res);
      for (let i = 0; i < this.dataTintucMain.length; i++) {
        this.isHiddenArr[i] = false;
      }
      this.firebaseService.readFunctionalityList('/tin-tuc-details').subscribe((res: any[]) => {
        this.dataTintucDetails = res;
        console.log('this.dataTintucDetails', this.dataTintucDetails);
        this.dataTypeTintucDetails.splice(0, this.dataTypeTintucDetails.length);
        for (let i = 0; i < this.dataTintucMain.length; i++) {
          console.log('mot: ', this.dataTintucMain[i].link);
          this.dataTypeTintucDetails[i] = [];
          console.log('le', this.dataTintucDetails.length);
          for (let j = 0; j < this.dataTintucDetails.length; j++) {
            console.log('dataTypeTintucDetails', this.dataTintucMain[i].link);
            console.log('dataTypeTintucDetails', this.dataTintucDetails[j].tintucMain);
            if (this.dataTintucMain[i].link === this.dataTintucDetails[j].tintucMain) {
              this.dataTypeTintucDetails[i].push(this.dataTintucDetails[j]);
            }
          }
        }

      })
    })

  }

  ngOnInit(): void {

  }
  openFormTintucDetails(){
    this.dialog.open(FormTintucDetailsComponent, {
      height: '500px', width: '1000px'
    })
  }

  updateCustomer(rowData: any, link: string){
    const dialogRef = this.dialog.open(FormTintucDetailsComponent, {
      height:  '500px', width: '1000px'
    });
    dialogRef.componentInstance.isEdit = true;
    dialogRef.componentInstance.dataPatchValue = rowData;
    dialogRef.afterClosed().subscribe(res => {
      if (res  && res.data){
        this.firebaseService.updateFunctionalityList(res.data, link , rowData.idItem);
      }
    });
  }

  public showHidden(index: number) {
    // console.log(this.dataProductMain[index].link);
    // console.log(this.dataTypeProductDetails);

    for (let i = 0; i < this.isHiddenArr.length; i++) {
      this.isHiddenArr[i] = false;
    }
    this.isHiddenArr[index] = true;
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
    this.firebaseService.deleteFunctionality(rowdata, '/tin-tuc-details');
  }
}
