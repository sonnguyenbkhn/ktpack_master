import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {DataService} from "../services/data.service";
import {FirebaseService} from "../services/firebase.service";
import {Title, Meta} from '@angular/platform-browser';
interface DataProductMain {
  addCart: false;
  address: "Hưng Yên";
  checkBox: boolean;
  description: { content: '', title: '' }[];
  discount: "";
  evaluate: "";
  idItem: "-Mv-uV8HCRC2mlXhMmJN";
  img: { link: '', name: '' }[];
  like: boolean;
  price: "Liên hệ";
  productDetails: { link: '', name: '' };
  productMain: "";
  productMainBrand: "";
  productMetaGoogle: { content: '', itemprop: '' }[];
  productMetaName: { content: '', name: '' }[];
  productMetaProperty: { content: '', property: '' }[];
  sellNumber: number;
  star: number;
}

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss']
})
export class ProductMainComponent implements OnInit {
  page = 1;
  public itemOfPage = 10;
  public itemOfPageArr = [4, 8, 12, 16, 20, 24];
  public chooseItemOfPage = this.itemOfPageArr[1];
  public priceSortArr = [
    {name: 'Giá: Thấp đến Cao', keyword: 'low'},
    {name: 'Giá: Cao đến Thấp', keyword: 'high'}
  ];
  public choosePriceSortArr = this.priceSortArr[0];

  public dataTotalProduct: any[] = [];
  public dataproductMainList: any[] = [];
  public productMainID: Observable<any> | any;
  dataProductMain = [{
    addCart: false,
    address: "Hưng Yên",
    checkBox: false,
    description: [{ content: '', title: '' }],
    discount: "",
    evaluate: "",
    idItem: "-Mv-uV8HCRC2mlXhMmJN",
    img: [{ link: '', name: '' }],
    like: false,
    price: "Liên hệ",
    productDetails: { link: '', name: '' },
    productMain: "",
    productMainBrand: "",
    productMetaGoogle: [{ content: '', itemprop: '' }],
    productMetaName: [{ content: '', name: '' }],
    productMetaProperty: [{ content: '', property: '' }],
    sellNumber: 0,
    star: 0,
  }];
  public checkUrlHidden = false;
  public dataItemProductTotal: any; // giá trị của từng sản phẩm
  public dataTitle: any;
  public load = false;register = false;
  constructor(public activatedRoute: ActivatedRoute, public dataServices: DataService, public firebaseService: FirebaseService, public meta: Meta) {
    // console.log(window.location.href);
    const url = window.location.href.toString();
    // console.log(url.slice(10, url.length).split('/').length - 1);
    const checkLoop = url.slice(10, url.length).split('/').length - 1;
    if (checkLoop >= 2) {
      this.checkUrlHidden = true;
      // console.log('this.checkUrlHidden', this.checkUrlHidden);
    }
    this.isCheckUrl();
  }

  ngOnInit(): void {
    this.firebaseService.readFunctionalityObject('/productMain/productMainList').subscribe((res: any[]) => {
      this.dataproductMainList = res;

      this.dataproductMainList.forEach(item => {
        // console.log(item.link);

        this.activatedRoute.paramMap.subscribe(params => {
          this.productMainID = params.get('productMains');
          // console.log('productMainID: ' + this.productMainID);
          this.dataProductMain.splice(0, this.dataProductMain.length);
          if (this.checkUrlHidden) {
            // check meta tag product main
          } else {
            if (item.link === this.productMainID) {
              this.dataTitle = item.name;
              // item.productMainListMetaGoogle.forEach((item1: { itemprop: any; }) => {
              //   //KEY THE META GOOGLE
              //   // console.log(item1.itemprop);
              //
              // })
              // item.productMainListMetaProperty.forEach((item1: { content: any; }) => {
              //   //KEY THE META FACEBOOK
              //   // console.log(item1.content);
              //
              // })
              // item.productMainListMetaName.forEach((item1: { content: any; }) => {
              //   //KEY THE META HTML
              //   // console.log(item1.content);
              //
              // })

              for(let i = 0; i < item.productMainListMetaGoogle.length; i++){
                this.meta.addTags([
                  {name: item.productMainListMetaGoogle[i].itemprop, content: item.productMainListMetaGoogle[i].content},
                ]);
              }
              for(let i = 0; i < item.productMainListMetaName.length; i++){
                this.meta.addTags([
                  {name: item.productMainListMetaName[i].name, content: item.productMainListMetaName[i].content},
                ]);
              }
              for(let i = 0; i < item.productMainListMetaProperty.length; i++){
                this.meta.addTags([
                  {name: item.productMainListMetaProperty[i].property, content: item.productMainListMetaProperty[i].content},
                ]);
              }

            }
          }
          this.firebaseService.readFunctionalityList('/productDetails').subscribe((res: any[]) => {
            this.dataTotalProduct = res;
            this.dataProductMain.splice(0, this.dataProductMain.length);
            for (let i = 0; i < this.dataTotalProduct.length; i++) {
              // console.log(this.dataTotalProduct[i].productMain);
              if (this.dataTotalProduct[i].productMain === this.productMainID) {
                this.dataProductMain.push(this.dataTotalProduct[i]);
                // console.log('need', this.dataProductMain);
              }
            }
          })
        })
      })
    })
  }

  public sortBestSales(): any {
    // tslint:disable-next-line:only-arrow-functions typedef max-line-length
    this.dataProductMain = this.dataProductMain.sort(function (item1, item2) {
      const value1 = item1.sellNumber;
      const value2 = item2.sellNumber;
      if (value1 > value2) {
        return -1;
      }
      if (value1 < value2) {
        return 1;
      }
      return 0;
    });
  }

  public sortPopular(): any {
    // tslint:disable-next-line:only-arrow-functions typedef max-line-length
    this.dataProductMain = this.dataProductMain.sort(function (item1, item2) {
      const value1 = item1.star;
      const value2 = item2.star;
      if (value1 > value2) {
        return -1;
      }
      if (value1 < value2) {
        return 1;
      }
      return 0;
    });
  }

  public isCheckUrl() {
    const url = window.location.href.toString();
    // console.log(url.slice(10, url.length).split('/').length - 1);
    const checkLoop = url.slice(10, url.length).split('/').length - 1;
    if (checkLoop >= 2) {
      return true;
    } else {
      return false;
    }
  }

  loadingTest() {
    // loading triggered
    this.load = true;

    setTimeout(() => {
      // loader stops after 5s
      this.load = false,  this.register = true;
    }, 700)
  }
  scrollTop(){
    window.scrollTo(0,100);
  }



}
