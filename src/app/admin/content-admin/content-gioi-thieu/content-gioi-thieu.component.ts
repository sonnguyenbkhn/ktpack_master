import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FirebaseService} from "../../../services/firebase.service";
import {FormGioiThieuComponent} from "../../formContent/form-gioi-thieu/form-gioi-thieu.component";
import {FormInfoCompanyComponent} from "../../formContent/form-info-company/form-info-company.component";

@Component({
  selector: 'app-content-gioi-thieu',
  templateUrl: './content-gioi-thieu.component.html',
  styleUrls: ['./content-gioi-thieu.component.scss']
})
export class ContentGioiThieuComponent implements OnInit {
  public dataFormGioithieuFB = {
    adviseCompany: '',
    commitCompany: '',
    contentGioithieu1: '',
    imgLink: '',
  };
  constructor(public dialog: MatDialog, public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.readFunctionalityObject('/gioi-thieu').subscribe((res: any) => {
      this.dataFormGioithieuFB = res;
    })
  }

  openFormGioithieu() {
    this.dialog.open(FormGioiThieuComponent, {
      height: '700px', width: '1000px'
    })
  }

  updateFormGioithieu(rowData: any) {
    const dialogRef = this.dialog.open(FormGioiThieuComponent, {
      height: '700px', width: '1000px'
    })
    dialogRef.componentInstance.isEdit = true;
    dialogRef.componentInstance.dataPatchValue =  rowData;
    dialogRef.afterClosed().subscribe(res => {
      if (res  && res.isEdit && res.data){
        this.firebaseService.updateFunctionality(res.data , '/gioi-thieu');
      }
    });
  }
}
