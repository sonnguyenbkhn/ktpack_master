import { Component, OnInit } from '@angular/core';
import {FormTintucMainComponent} from "../../formContent/form-tintuc-main/form-tintuc-main.component";
import {MatDialog} from "@angular/material/dialog";
import {FirebaseService} from "../../../services/firebase.service";
import {FormTrangChuComponent} from "../../formContent/form-trang-chu/form-trang-chu.component";

@Component({
  selector: 'app-content-trang-chu',
  templateUrl: './content-trang-chu.component.html',
  styleUrls: ['./content-trang-chu.component.scss']
})
export class ContentTrangChuComponent implements OnInit {
  dataFormTrangchuFB: any;
  constructor(public dialog: MatDialog, public firebaseService: FirebaseService) {
    this.firebaseService.readFunctionalityObject('/trang-chu').subscribe((res: any) => {
      this.dataFormTrangchuFB = res;
    })
  }

  ngOnInit(): void {
  }

  openFormTrangchu() {
    this.dialog.open(FormTrangChuComponent, {
      height: '600px', width: '800px'
    })
  }

  updateFormTrangchu(rowData: any) {
    const dialogRef = this.dialog.open(FormTrangChuComponent, {
      height: '600px', width: '800px'
    })
    dialogRef.componentInstance.isEdit = true;
    dialogRef.componentInstance.dataPatchValue =  rowData;
    dialogRef.afterClosed().subscribe(res => {
      if (res  && res.isEdit && res.data){
        this.firebaseService.updateFunctionality(res.data , '/trang-chu');
      }
    });
  }
}
