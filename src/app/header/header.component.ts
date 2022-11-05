import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {FirebaseService} from "../services/firebase.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormLoginComponent} from "../form-login/form-login.component";
import {FormControl} from "@angular/forms";
import {BehaviorSubject, Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentNameSubject$ = new BehaviorSubject<any>([]);
  public valueInput: any;
  myControl = new FormControl();
  public dataSearchKeyword: any[] = [];
  public dataSearchMatch: any[] = [];
  public isCheckHeaderSmall = false;
  public keywordSearch: any;
  public dataMainList: any[] = [];
  public dataMainBrandList: any[] = [];
  public dataHeader: any[] =  [];
  public dataInfoFB = {
    address: '',
    email: '',
    hotline: '',
    imgLogo: '',
    tonchi: '',
    map: '',
    nameCompany: '',
    phoneNumber1: '',
    phoneNumber2: '',
    website: '',
  }
  filteredOptions: Observable<string[]> | any;
  constructor(public dataServicesService: DataService, public firebaseService: FirebaseService, public dialog: MatDialog, public router: Router,) {
    this.dataServicesService.key = this.myControl.value;
    this.firebaseService.readFunctionalityObject('/info-company').subscribe((res: any) => {
      this.dataInfoFB = res;
    })
    this.firebaseService.readFunctionalityObject('/productMain/productMainList').subscribe((res: any[]) => {
      this.dataMainList = res;
      this.firebaseService.readFunctionalityObject('/productMainBrand/productMainBrandList').subscribe((res: any[]) => {
        this.dataMainBrandList = res;
        for (let i = 0 ; i < this.dataMainList.length; i++){
          this.dataHeader[i] = [];
          for(let j = 0; j < this.dataMainBrandList.length; j++){
            if(this.dataMainList[i].link === this.dataMainBrandList[j].nameMain){
              this.dataHeader[i].push(this.dataMainBrandList[j]);
            }
          }
        }
      })
    })

    this.routingUrlTrangchu();

  }

  ngOnInit(): void {
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value: any) => this._filter(value))
    // );
  }
  public routingUrlTrangchu(){
    return !window.location.href.toString().includes('trang-chu');
  }
  public toggleMenu(): any{
    document.getElementsByClassName('container-listMenuTop')[0].classList.toggle('active');
  }
  public login(): any{
    this.dialog.open(FormLoginComponent, {
      height: '400px', width: '350px'
    });
  }
  public openContentList(){
    const screenMobile__content = document.getElementsByClassName('screenMobile__content')[0] as HTMLElement;
    screenMobile__content.classList.toggle('active');
  }
  public clickUnhover(){
    const val = document.getElementsByClassName('box-list')[0] as HTMLElement;
  }

  public getValueInput(): any{
    console.log(this.valueInput);
    this.dataSearchKeyword.splice(0, this.dataSearchKeyword.length);
    this.dataSearchMatch.splice(0, this.dataSearchMatch.length);
    this.firebaseService.readFunctionalityList('/productDetails').subscribe((res: any[]) => {
      this.dataSearchKeyword = res;
      res.forEach(item1 => {
        if(this.dataServicesService.removeDauTV(item1.productDetails.name).includes(this.valueInput)){
          this.dataSearchMatch.push(item1);
        }
      })
    })
    console.log(this.dataSearchMatch);
    this.dataServicesService.currentNameSubject$.next(this.dataSearchMatch);
    this.router.navigateByUrl(`/search-result`, );
  }

}
