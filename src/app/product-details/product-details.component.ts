import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {DataService} from '../services/data.service';
import {FirebaseService} from '../services/firebase.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NgxLoadingXConfig, POSITION, SPINNER, NgxLoadingXModule } from 'ngx-loading-x';
import {Title, Meta} from '@angular/platform-browser';
interface DataProductMain {
  addCart: false;
  address: 'Hưng Yên';
  checkBox: boolean;
  description: { content: '', title: '' }[];
  discount: '';
  evaluate: '';
  idItem: '-Mv-uV8HCRC2mlXhMmJN';
  img: { link: '', name: '' }[];
  like: boolean;
  price: 'Liên hệ';
  productDetails: { link: '', name: '' };
  productMain: '';
  productMainBrand: '';
  productMetaGoogle: { content: '', itemprop: '' }[];
  productMetaName: { content: '', name: '' }[];
  productMetaProperty: { content: '', property: '' }[];
  sellNumber: number;
  star: number;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  public productDetailsObs: Subscription|any;
  public load = false; register = false;

  currentRate = 0;
  itemStarArr = [true, true, true, true, true ];
  page = 1;
  public itemOfPage = 10;
  public itemOfPageArr = [4, 8, 12, 16, 20, 24];
  public chooseItemOfPage = this.itemOfPageArr[1];


  public dataProductSame: any[] = [];
  public checkUrlHidden = false;
  public productDetailsID: Observable<any> | any;
  public dataProductDetails: any;
  public dataTotalProductDetails: any[] = [];
  public dataInfoCompany: any;
  public dataAddCart: any[] = [];
  public val5 = 0; val4 = 0;
  public formGroupDanhgia: FormGroup|any;
  constructor(public activatedRoute: ActivatedRoute, public dataServices: DataService, public firebaseService: FirebaseService, public meta: Meta,
              public fb: FormBuilder) {
    this.formGroupDanhgia = this.fb.group({
      content: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.firebaseService.readFunctionalityObject('/info-company').subscribe((res: any) => {
      this.dataInfoCompany = res;
    });
    this.activatedRoute.paramMap.subscribe(params => {
      this.productDetailsID = params.get('productDetails');
      // this.productMainBrandID = params.get('productMainBrands');
      const urlMainbrand = window.location.href.toString().substring(10).split('/', 10);
      console.log('windows', urlMainbrand[urlMainbrand.length - 2]);
      // console.log('productDetailsID: ' + this.productDetailsID);
      this.dataTotalProductDetails.splice(0, this.dataTotalProductDetails.length);
      this.dataProductSame.splice(0, this.dataProductSame.length);
      this.productDetailsObs = this.firebaseService.readFunctionalityList('/productDetails').subscribe((res: any[]) => {
        //


        this.dataTotalProductDetails = res;
        // console.log('res11', res);
        for (let i = 0; i < this.dataTotalProductDetails.length; i++) {
          // console.log('uu',this.dataTotalProductDetails[i].productDetails.link);
          if (this.dataTotalProductDetails[i].productDetails.link === this.productDetailsID) {
            this.dataProductDetails = JSON.parse(JSON.stringify(this.dataTotalProductDetails[i]));
            for (let i = 0; i < this.dataProductDetails.productMetaGoogle.length; i++){
              this.meta.addTags([
                {name: this.dataProductDetails.productMetaGoogle[i].itemprop, content: this.dataProductDetails.productMetaGoogle[i].content},
              ]);
            }
            for (let i = 0; i < this.dataProductDetails.productMetaName.length; i++){
              this.meta.addTags([
                {name: this.dataProductDetails.productMetaName[i].name, content: this.dataProductDetails.productMetaName[i].content},
              ]);
            }
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.dataProductDetails.productMetaProperty.length; i++){
              this.meta.addTags([
                {name: this.dataProductDetails.productMetaProperty[i].property, content: this.dataProductDetails.productMetaProperty[i].content},
              ]);
            }
          }
          if (this.dataTotalProductDetails[i].productMainBrand === urlMainbrand[urlMainbrand.length - 2]){
            this.dataProductSame.push(this.dataTotalProductDetails[i]);
            console.log('dataProductSame', this.dataProductSame);
          }
        }
        this.val5 = (Math.random() * 3 + 7) * 10;
        this.val4 = 100 - this.val5;

      });
    });
  }

  public clickImg(k: number): any {
    // console.log('da click' + k);
    const itemBig = document.getElementsByClassName('img-item') as HTMLCollectionOf<HTMLElement>;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < itemBig.length; i++) {
      itemBig[i].style.display = 'none';
    }
    const idImg = document.getElementById('idImg' + k) as HTMLElement;
    idImg.style.display = 'block';
  }
  public addCart(): any{
    if (this.dataProductDetails !== undefined){
      this.dataProductDetails.addCart = true;
      this.dataProductDetails.checkBox = true;
      this.dataAddCart.push(this.dataProductDetails);
      this.dataServices.dataAddCartItem$.next(this.dataAddCart);
    }
  }
  ChooseStar(index: number){
    for (let i = 0; i < this.itemStarArr.length; i++ ){
      this.itemStarArr[i] = true;
    }
    for (let i = 0; i < this.itemStarArr.length; i++ ){
      if (i <= index){
        this.itemStarArr[i] = false;
      }
    }
    return index;
  }
  sendDanhgia(){
    alert('Bạn đã gửi thành công!');
  }
  loadingTest() {
    // loading triggered
    this.load = true;

    setTimeout(() => {
      // loader stops after 5s
      this.load = false,  this.register = true;
    }, 700);
  }
  scrollTop(){
    window.scrollTo(0, 100);
  }

  ngOnDestroy(){
    this.productDetailsObs.unsubscribe();
  }

}
