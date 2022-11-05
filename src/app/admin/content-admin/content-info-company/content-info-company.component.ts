import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormInfoCompanyComponent} from "../../formContent/form-info-company/form-info-company.component";
import {FirebaseService} from "../../../services/firebase.service";

@Component({
  selector: 'app-content-info-company',
  templateUrl: './content-info-company.component.html',
  styleUrls: ['./content-info-company.component.scss']
})
export class ContentInfoCompanyComponent implements OnInit {
  public dataFormInfoCompanyFB: any;
  constructor(public dialog: MatDialog, public firebaseService: FirebaseService) {
    this.firebaseService.readFunctionalityObject('/info-company').subscribe((res: any) => {
      this.dataFormInfoCompanyFB = res;
    })
  }

  ngOnInit(): void {
  }
  public openFormInfoCompany(){
    this.dialog.open(FormInfoCompanyComponent, {
      height: '400px', width: '500px'
    })
  }
  public updateFormInfoCompany(rowData: any){
    const dialogRef = this.dialog.open(FormInfoCompanyComponent, {
      height: '400px', width: '500px'
    })
    dialogRef.componentInstance.isEdit = true;
    dialogRef.componentInstance.dataPatchValue =  rowData;
    dialogRef.afterClosed().subscribe(res => {
      if (res  && res.isEdit && res.data){
        this.firebaseService.updateFunctionality(res.data , '/info-company');
      }
    });
  }

}
