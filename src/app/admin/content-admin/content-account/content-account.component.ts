import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormAccountComponent} from '../../formContent/form-account/form-account.component';
import {FirebaseService} from "../../../services/firebase.service";

@Component({
  selector: 'app-content-account',
  templateUrl: './content-account.component.html',
  styleUrls: ['./content-account.component.scss']
})
export class ContentAccountComponent implements OnInit {
  public dataFormAcc: any;
  constructor(public dialog: MatDialog, public firebaseService: FirebaseService) {
    this.getAllAcc();
  }

  ngOnInit(): void {
  }
  public getAllAcc(): any{
    this.firebaseService.readFunctionalityObject('/account').subscribe((res: any) => {
      this.dataFormAcc = res;
    });
  }
  public openDialog(rowdata: any): any{
    const dialogRef = this.dialog.open(FormAccountComponent, {
      height: '300px', width: '300px'
    });
    dialogRef.componentInstance.formDataAcc = rowdata;
    dialogRef.afterClosed().subscribe(res => {
      if (res  && res.data) {
        this.firebaseService.updateFunctionality(res.data, '/account');
      }
    });
  }

}
