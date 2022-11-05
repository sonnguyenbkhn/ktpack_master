import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {DataService} from "../services/data.service";
import {FirebaseService} from "../services/firebase.service";
import {Title, Meta} from '@angular/platform-browser';
@Component({
  selector: 'app-product-main-brand',
  templateUrl: './product-main-brand.component.html',
  styleUrls: ['./product-main-brand.component.scss']
})

export class ProductMainBrandComponent implements OnInit {
  public load = false;register = false;

  page = 1;
  public itemOfPage = 10;
  public itemOfPageArr = [4, 8, 12, 16, 20, 24];
  public chooseItemOfPage = this.itemOfPageArr[1];
  public priceSortArr = [
    {name: 'Giá: Thấp đến Cao', keyword: 'low'},
    {name: 'Giá: Cao đến Thấp', keyword: 'high'}
  ];
  public choosePriceSortArr = this.priceSortArr[0];


  public productMainBrandID: Observable<any>|any;
  dataProductMainBrand: any[] = [];
  dataTotalProduct: any[] = [];
  keyTitle: any;
  public checkUrlHidden = false;
  constructor(public activatedRoute: ActivatedRoute, public dataServices: DataService, public firebaseService: FirebaseService, public meta: Meta) {

    this.isCheckUrl();
  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.productMainBrandID = params.get('productMainBrands');
      // console.log('productMainBrandID: ' + this.productMainBrandID);
      this.dataProductMainBrand.splice(0, this.dataProductMainBrand.length);
      this.firebaseService.readFunctionalityObject('/productMainBrand/productMainBrandList').subscribe((res: any[]) => {
        // console.log('res1', res);
        for(let i = 0; i < res.length; i++){
          // console.log('res', res[i]);
          if(res[i].link === this.productMainBrandID){
            this.keyTitle = res[i].name;
            for(let i = 0; i < res[i].productMainListMetaGoogle.length; i++){
              this.meta.addTags([
                {name: res[i].productMainListMetaGoogle[i].itemprop, content: res[i].productMainListMetaGoogle[i].content},
              ]);
            }
            for(let i = 0; i < res[i].productMainListMetaName.length; i++){
              this.meta.addTags([
                {name: res[i].productMainListMetaName[i].name, content: res[i].productMainListMetaName[i].content},
              ]);
            }
            for(let i = 0; i < res[i].productMainListMetaProperty.length; i++){
              this.meta.addTags([
                {name: res[i].productMainListMetaProperty[i].property, content: res[i].productMainListMetaProperty[i].content},
              ]);
            }
            break;
          }
        }
      })
      this.firebaseService.readFunctionalityList('/productDetails').subscribe((res: any[]) => {
        this.dataTotalProduct = res;
        for (let i = 0; i < this.dataTotalProduct.length; i++) {
          // tslint:disable-next-line:prefer-for-of
          if (this.dataTotalProduct[i].productMainBrand === this.productMainBrandID) {
            this.dataProductMainBrand.push(this.dataTotalProduct[i]);
          }
        }
      })

    })

  }

  public sortBestSales(): any {
    // tslint:disable-next-line:only-arrow-functions typedef max-line-length
    this.dataProductMainBrand = this.dataProductMainBrand.sort(function(item1, item2){
      const value1 = item1.sellNumber;
      const value2 = item2.sellNumber;
      if (value1 > value2){
        return -1;
      }
      if (value1 < value2){
        return 1;
      }
      return 0;
    });
  }
  public sortPopular(): any {
    // tslint:disable-next-line:only-arrow-functions typedef max-line-length
    this.dataProductMainBrand = this.dataProductMainBrand.sort(function(item1, item2){
      const value1 = item1.star;
      const value2 = item2.star;
      if (value1 > value2){
        return -1;
      }
      if (value1 < value2){
        return 1;
      }
      return 0;
    });
  }

  public isCheckUrl(){
    const url = window.location.href.toString();
    // console.log(url.slice(10, url.length).split('/').length - 1);
    const checkLoop = url.slice(10, url.length).split('/').length - 1;
    if(checkLoop >=3){
      return true;
    }else{
      return false;
    }
  }

  public loadingTest() {
    // loading triggered
    this.load = true;

    setTimeout(() => {
      // loader stops after 5s
      this.load = false,  this.register = true;
    }, 700)
  }
  public scrollTop(){
    window.scrollTo(0,100);
  }
}
