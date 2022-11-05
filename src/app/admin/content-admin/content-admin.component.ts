import { Component, OnInit } from '@angular/core';
import {AdminComponent} from "../admin.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-content-admin',
  templateUrl: './content-admin.component.html',
  styleUrls: ['./content-admin.component.scss']
})
export class ContentAdminComponent implements OnInit {

  constructor(public adminComponent: AdminComponent, public matDialog: MatDialog,) { }

  ngOnInit(): void {
  }

}
