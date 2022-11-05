import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {FirebaseService} from "../services/firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  public load = false;register = false;
  page = 1;
  public itemOfPageArr = [8, 12, 16, 20, 24];
  public priceSortArr = [
    {name: 'Giá: Thấp đến Cao', keyword: 'low'},
    {name: 'Giá: Cao đến Thấp', keyword: 'high'}
  ];
  public chooseItemOfPage = this.itemOfPageArr[0];
  public choosePriceSortArr = this.dataService.currentNameSubject$.getValue();
  public dataSearchMatch = this.dataService.currentNameSubject$.getValue();
  constructor(public dataService: DataService, public firebaseService: FirebaseService, public router: Router,) { }

  ngOnInit(): void {
  }
  public sortBestSales(): any {
    // console.log('sort best sales');
    // tslint:disable-next-line:typedef only-arrow-functions max-line-length
    this.dataSearchMatch = this.dataSearchMatch.sort(function(item1: { sellNumber: { "": any; }; }, item2: { sellNumber: { "": any; }; } ) {
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
    // console.log('sort popular');
    // tslint:disable-next-line:typedef only-arrow-functions
    this.dataSearchMatch = this.dataSearchMatch.sort(function(item1: { star: any; }, item2: { star: any; }) {
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
  public notFoundBtn(): any{
    this.router.navigateByUrl('/trang-chu');
    window.scrollTo(0, 0);
  }
  public loadingTest(item1: string, item2: string, item3: string) {
    // loading triggered
    this.load = true;

    setTimeout(() => {
      // loader stops after 5s
      this.load = false,  this.register = true;
      this.router.navigateByUrl('/' + item1 + '/' + item2 + '/' + item3);
    }, 500)
  }
  public routerLink3(item1: string, item2: string, item3: string): any{
    this.router.navigateByUrl('/' + item1 + '/' + item2 + '/' + item3);
  }
  public scrollTop(){
    window.scrollTo(0,100);
  }
}
