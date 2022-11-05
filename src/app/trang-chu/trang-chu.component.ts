import {Component, OnInit, OnDestroy} from '@angular/core';
import {DataService} from "../services/data.service";
import {OwlOptions} from "ngx-owl-carousel-o";
import {FirebaseService} from "../services/firebase.service";
import {Title, Meta} from '@angular/platform-browser';
import { Subscription } from 'rxjs';
interface DataImgTrangchu {
  imgLeft: { name: '', link: '', linkRouting: '' }[];
  imgRight: { name: '', link: '', linkRouting: '' }[];
}

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit, OnDestroy {
  private trangchuObs: Subscription|any;
  public load = false;
  register = false;
  public dataMainList: any[] = [];
  public dataMainBrandList: any[] = [];
  public dataHeader: any[] = [];
  public dataImgTrangchu: DataImgTrangchu | any;
  public dataImgTrangchuLeft: any[] = [];
  public dataImgTrangchuRight: any[] = [];
  public metaArr: any[] = [];
  public dataTypeProductDetails: any[] = [];
  public dataAllProductDetails: any[] = [];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }
  arrFirstPage: any[] = [];
  public itemOfPageArr = [2, 4, 8, 12, 16, 20, 24];
  public chooseItemOfPage = this.itemOfPageArr[2];

  constructor(public dataService: DataService, public firebaseService: FirebaseService, public meta: Meta) {
    this.firebaseService.readFunctionalityObject('/productMain/productMainList').subscribe((res: any[]) => {
      this.dataMainList = res;
      this.firebaseService.readFunctionalityObject('/productMainBrand/productMainBrandList').subscribe((res: any[]) => {
        this.dataMainBrandList = res;
        for (let i = 0; i < this.dataMainList.length; i++) {
          this.dataHeader[i] = [];
          this.arrFirstPage[i] = 1;
          for (let j = 0; j < this.dataMainBrandList.length; j++) {
            if (this.dataMainList[i].link === this.dataMainBrandList[j].nameMain) {
              this.dataHeader[i].push(this.dataMainBrandList[j]);
            }
          }
        }
      })
    })

    this.firebaseService.readFunctionalityList('/productDetails').subscribe((res: any[]) => {
      this.dataAllProductDetails = res;
      // console.log(this.dataAllProductDetails[0].productMain);
      this.dataTypeProductDetails.splice(0, this.dataTypeProductDetails.length);
      for (let i = 0; i < this.dataMainList.length; i++) {
        this.dataTypeProductDetails[i] = [];
        for (let j = 0; j < this.dataAllProductDetails.length; j++) {
          if (this.dataMainList[i].link === this.dataAllProductDetails[j].productMain) {
            this.dataTypeProductDetails[i].push(this.dataAllProductDetails[j]);
          }
        }
      }
      // console.log(this.dataTypeProductDetails);

    })

  }

  ngOnInit(): void {
    this.trangchuObs = this.firebaseService.readFunctionalityObject('/trang-chu').subscribe((res: { imgLeft: any[]; imgRight: any[]; productMetaGoogle: any[], productMetaName: any[], productMetaProperty: any[] }) => {
      this.dataImgTrangchuLeft = res.imgLeft;
      this.dataImgTrangchuRight = res.imgRight;
      // this.metaArr.push(res.productMetaGoogle, res.productMetaName, res.productMetaProperty);
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

  loadingTest() {
    // loading triggered
    this.load = true;

    setTimeout(() => {
      // loader stops after 5s
      this.load = false, this.register = true;
    }, 700)
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  ngOnDestroy(): void {
    this.trangchuObs.unsubscribe();
  }
}
