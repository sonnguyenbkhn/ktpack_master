import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-index-main-mobile',
  templateUrl: './index-main-mobile.component.html',
  styleUrls: ['./index-main-mobile.component.scss']
})
export class IndexMainMobileComponent implements OnInit {
  public dataMainList: any[] = [];
  public dataMainBrandList: any[] = [];
  public dataHeader: any[] =  [];
  constructor(public dataService: DataService, public firebaseService: FirebaseService) {
    this.firebaseService.readFunctionalityObject('/productMain/productMainList').subscribe((res: any[]) => {
      this.dataMainList = res;
      this.firebaseService.readFunctionalityObject('/productMainBrand/productMainBrandList').subscribe((res: any[]) => {
        this.dataMainBrandList = res;
        for (let i = 0; i < this.dataMainList.length; i++) {
          this.dataHeader[i] = [];
          for (let j = 0; j < this.dataMainBrandList.length; j++) {
            if (this.dataMainList[i].link === this.dataMainBrandList[j].nameMain) {
              this.dataHeader[i].push(this.dataMainBrandList[j]);
            }
          }
        }
      })
    })
  }

  ngOnInit(): void {
  }

}
