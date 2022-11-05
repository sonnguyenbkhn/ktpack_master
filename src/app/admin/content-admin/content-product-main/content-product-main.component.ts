import { Component, OnInit } from '@angular/core';
import {FormProductMainComponent} from "../../formContent/form-product-main/form-product-main.component";
import {MatDialog} from "@angular/material/dialog";
import {FirebaseService} from "../../../services/firebase.service";
import {Validators} from "@angular/forms";
interface DataProductMainList {
  name: '',
  link: '',
  productMainListMetaGoogle: {
    itemprop: '',
    content: '',
  }[],
  productMainListMetaName: {
    name: '',
    content: ''
  }[],
  productMainListMetaProperty: {
    property: '',
    content: ''
  }[],
}
@Component({
  selector: 'app-content-product-main',
  templateUrl: './content-product-main.component.html',
  styleUrls: ['./content-product-main.component.scss']
})
export class ContentProductMainComponent implements OnInit {
  public dataProductMain: any;
  public dataProductMainList: DataProductMainList[] = [];
  public dataProductMainListJson: any[] = [];
  public dataProductMainListMetaGoogle: any;
  constructor(public dialog: MatDialog, public firebaseService: FirebaseService) {
    this.firebaseService.readFunctionalityObject('/productMain').subscribe((res: any) => {
      this.dataProductMain = res;
      console.log(res);
    });
    this.firebaseService.readFunctionalityObject('/productMain/productMainList').subscribe((res: any) => {
      this.dataProductMainList = res;
      this.dataProductMainListJson = JSON.parse(JSON.stringify(res));
      console.log(this.dataProductMainList[0].link);
    });
  }

  ngOnInit(): void {

  }
  public openFormProductMain(){
    this.dialog.open(FormProductMainComponent, {
      height: '500px', width: '1000px'
    })
  }
  public editDataProductMain(data: any){
    const dialogRef = this.dialog.open(FormProductMainComponent, {
      height: '500px', width: '1000px'
    })
    dialogRef.componentInstance.dataPatchValue = data;
    dialogRef.afterClosed().subscribe(res => {
      if(res && res.data){
        this.firebaseService.updateFunctionality(res.data, '/productMain');
      }
    })
  }
}
