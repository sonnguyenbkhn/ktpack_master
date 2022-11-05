import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FirebaseService} from "../services/firebase.service";
import {FormProductMainComponent} from "./formContent/form-product-main/form-product-main.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public checkArrHidden = [
    {name: 'product-main', value: true},
    {name: 'product-main-brand', value: true},
    {name: 'product-details', value: true},
    {name: 'info-company', value: true},
    {name: 'gioithieu', value: true},
    {name: 'tintuc', value: true},
    {name: 'tintuc_details', value: true},
    {name: 'lienhe', value: true},
    {name: 'trangchu', value: true},
    {name: 'thungnhuadanpla', value: true},
    {name: 'vachnhuadanpla', value: true},
    {name: 'xoppefoameva', value: true},
    {name: 'xopbongkhi', value: true},
    {name: 'trangchu', value: true},
    {name: 'tieudeMain', value: true},
    {name: 'social', value: true},
    {name: 'account', value: true},
    {name: 'cart', value: true},
    {name: 'account', value: true},
  ];

  constructor(public dialog: MatDialog, public firebaseService: FirebaseService) {

  }
  items: any;
  ngOnInit(): void {

  }
  public activeHiddenBtn(keyHidden: any): any {
    console.log(keyHidden);
    this.checkArrHidden.forEach(item => {
      item.value = true;
    });
    this.checkArrHidden.forEach(item => {
      if (item.name === keyHidden) {
        item.value = false;
      }
    });
  }

  public returnValueCheck(name: any): any {
    let result = true;
    this.checkArrHidden.forEach((item: any) => {
      if (item.name === name) {
        result = item.value;
      }
    });
    return result;
  }

  public show(): any{
    console.log(this.items);
  }


}
