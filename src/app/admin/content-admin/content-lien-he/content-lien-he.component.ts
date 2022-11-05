import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FirebaseService} from "../../../services/firebase.service";
import {FormInfoCompanyComponent} from "../../formContent/form-info-company/form-info-company.component";
import {FormLienheComponent} from "../../formContent/form-lienhe/form-lienhe.component";

@Component({
  selector: 'app-content-lien-he',
  templateUrl: './content-lien-he.component.html',
  styleUrls: ['./content-lien-he.component.scss']
})
export class ContentLienHeComponent implements OnInit {
  public dataFormLienheFB: any;
  constructor(public dialog: MatDialog, public firebaseService: FirebaseService) {
    this.firebaseService.readFunctionalityObject('/lien-he').subscribe((res: any) => {
      this.dataFormLienheFB = res;
    })
  }

  ngOnInit(): void {
  }

  openFormLienhe() {
    this.dialog.open(FormLienheComponent, {
      height: '400px', width: '500px'
    })
  }

  updateFormLienhe(rowData: any) {
    const dialogRef = this.dialog.open(FormLienheComponent, {
      height: '400px', width: '500px'
    })
    dialogRef.componentInstance.isEdit = true;
    dialogRef.componentInstance.dataPatchValue =  rowData;
    dialogRef.afterClosed().subscribe(res => {
      if (res  && res.isEdit && res.data){
        this.firebaseService.updateFunctionality(res.data , '/lien-he');
      }
    });
  }
}
