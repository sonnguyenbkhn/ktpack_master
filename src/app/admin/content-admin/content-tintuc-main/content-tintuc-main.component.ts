import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FirebaseService} from "../../../services/firebase.service";
import {FormTintucMainComponent} from "../../formContent/form-tintuc-main/form-tintuc-main.component";


@Component({
  selector: 'app-content-tintuc-main',
  templateUrl: './content-tintuc-main.component.html',
  styleUrls: ['./content-tintuc-main.component.scss']
})
export class ContentTintucMainComponent implements OnInit {
  public dataFormTintucFB: any;
  public dataTintucMain: any[] = [];
  constructor(public dialog: MatDialog, public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.readFunctionalityObject('/tin-tuc-main').subscribe((res: any) => {
      this.dataFormTintucFB = res;
    });
    this.firebaseService.readFunctionalityObject('/tin-tuc-main/formTintucList').subscribe((res: any) => {
      this.dataTintucMain = res;
      console.log(res);
    });
  }

  openFormTintuc() {
    this.dialog.open(FormTintucMainComponent, {
      height: '800px', width: '1000px'
    })
  }

  updateFormTintuc(rowData: any) {
    const dialogRef = this.dialog.open(FormTintucMainComponent, {
      height: '800px', width: '1000px'
    })
    dialogRef.componentInstance.isEdit = true;
    dialogRef.componentInstance.dataPatchValue =  rowData;
    dialogRef.afterClosed().subscribe(res => {
      if (res  && res.isEdit && res.data){
        this.firebaseService.updateFunctionality(res.data , '/tin-tuc-main');
      }
    });
  }
}
