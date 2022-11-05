import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-footer-main-child',
  templateUrl: './footer-main-child.component.html',
  styleUrls: ['./footer-main-child.component.scss']
})
export class FooterMainChildComponent implements OnInit {

  public click = 0;
  dataMainList: any[] = [];
  infoCompany: any;
  constructor(public firebaseService: FirebaseService,public dataService: DataService) {
    this.firebaseService.readFunctionalityObject('/productMain/productMainList').subscribe((res: any[]) => {
      this.dataMainList = res;
    })
    this.firebaseService.readFunctionalityObject('/info-company').subscribe((res: any[]) => {
      this.infoCompany = res;
    })
  }

  ngOnInit(): void {
  }
  public raiseClick(): any{
    this.click = this.click + 1;
  }
}

