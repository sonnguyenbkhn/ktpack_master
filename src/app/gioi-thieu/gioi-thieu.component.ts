import { Component, OnInit, OnDestroy } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";
import {Title, Meta} from '@angular/platform-browser';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-gioi-thieu',
  templateUrl: './gioi-thieu.component.html',
  styleUrls: ['./gioi-thieu.component.scss']
})
export class GioiThieuComponent implements OnInit, OnDestroy {
  public gioithieuObs: Subscription|any;
  public dataGioiThieu: any;
  constructor(public firebaseService: FirebaseService, public meta: Meta) {
    this.routingUrlTrangchu();
  }

  ngOnInit(): void {
    this.gioithieuObs =  this.firebaseService.readFunctionalityObject('/gioi-thieu').subscribe((res: any) => {
      this.dataGioiThieu = res;
      for(let i = 0; i < res.productMetaGoogle.length; i++){
        this.meta.addTags([
          {name: res.productMetaGoogle[i].itemprop, content: res.productMetaGoogle[i].content},
        ]);
      }
      for(let i = 0; i < res.productMetaName.length; i++){
        this.meta.addTags([
          {name: res.productMetaName[i].name, content: res.productMetaName[i].content},
        ]);
      }
      for(let i = 0; i < res.productMetaProperty.length; i++){
        this.meta.addTags([
          {name: res.productMetaProperty[i].property, content: res.productMetaProperty[i].content},
        ]);
      }
    })
  }
  public routingUrlTrangchu(){
    if (window.location.href.toString().includes('trang-chu')){
      return  false;
    }
    else{
      return  true;
    }
  }
  ngOnDestroy() {

  }
}
