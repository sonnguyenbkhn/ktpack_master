import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {first} from "rxjs/operators";
interface ListHeader {
  mother: { name: any, link: any };
  child: { name: any, link: any }[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public key: any;
  public dataInfoCustomer$ = new BehaviorSubject<any>([]);
  public dataAddCartItem$ = new BehaviorSubject<any>([]);
  public timeWork: string[] = [
    '7h30 - 11h30', '13h30 - 17h30',
  ];
  public copyRight = '©Copyright 2021 | CÔNG TY CỔ PHẦN SẢN XUẤT KT-PACK - Giấy phép kinh doanh: 0901099386 Do sở kế hoạch và đầu tư TP Hà Nội cấp ngày 13/04/2021';
  public infoCompanyList: ListHeader[] = [
    {
      mother: {name: 'Thông tin công ty', link: ''},
      child: [{name: 'Giới thiệu công ty', link: ''},
        {name: 'Cơ hội việc làm', link: ''},
        {name: 'Ý kiến khách hàng', link: ''},
        {name: 'Danh sách đại lí', link: ''},
        {name: 'Đối tác', link: ''}]
    },
    {
      mother: {name: 'Chính sách chung', link: ''},
      child: [{name: 'Chính sách giao nhận', link: ''},
        {name: 'Chính sách bảo hành', link: ''},
        {name: 'Chính sách đổi trả hàng', link: ''},
        {name: '', link: './assets/Storage/Upload/banner/DMCA_logo-grn-btn120w.png'}]
    },
    {
      mother: {name: 'ĐIỀU KHOẢN & QUY ĐỊNH', link: ''},
      child: [{name: 'Quy định bảo mật', link: ''},
        {name: 'Quy định thanh toán', link: ''},
        {name: 'Điều khoản sử dụng', link: ''},
        {name: '', link: './assets/Storage/Upload/banner/da-thong-bao-website-voi-bo-ong-thuong.png'}]
    },
  ];
  // public dataHeader = [
  //   {mother: {name: 'TRANG CHỦ', link: '/trang-chu'}, child: [{name: '', link: ''}, ]},
  //   {mother: {name: 'GIỚI THIỆU', link: '/gioi-thieu'}, child: [{name: '', link: ''}, ]},
  //   {
  //     mother: {name: 'THÙNG NHỰA DANPLA', link: '/thung-nhua-danpla'},
  //     child: [],
  //   },
  //   {
  //     mother: {name: 'VÁCH NHỰA DANPLA', link: '/vach-nhua-danpla'},
  //     child: [],
  //   },
  //   {
  //     mother: {name: 'XỐP EVA - XỐP PE FOAM', link: '/xop-eva-pe-foam'},
  //     child: [],
  //   },
  //   {
  //     mother: {name: 'XỐP BÓNG KHÍ', link: '/xop-bong-khi'},
  //     child: [],
  //   },
  //   {mother: {name: 'TIN TỨC', link: '/tin-tuc'}, child: [{name: '', link: ''}, ]},
  //   {mother: {name: 'LIÊN HỆ', link: '/lien-he'}, child: [{name: '', link: ''}, ]},
  // ];
  public dataCartUnique:any[] = [];
  public dataCartTotal: any[] = [];  // tổng số đơn hàng trong giỏ
  public counter = 0;  // số lượng đơn hàng
  public idItemArr: {idItem: '', loop: 0}[] = [];
  public newArrIdNew:any [] = [];
  public newArrIdNew1:any [] = [];
  public newArrIdNew2:any [] = [];
  public newArrIdCount: {idItem: any; count: any; }[] = [];
  public dataInfoCustomer: any[] = [];
  public currentNameSubject$ = new BehaviorSubject<any>([]);
  constructor() {
    this.dataAddCartItem$.subscribe((item: any[]) => {
      // this.dataCartTotal.splice(0, this.dataCartTotal.length);
      item.forEach((item1: any) => {
        item1.quantity = 1;    // số lượng sản phẩm (mặc định là 1)
        this.dataCartTotal.push(item1);
        this.counter = this.dataCartTotal.length;
        // console.log('---------ii---------');
        // console.log(this.dataCartTotal);
      });
      // array map itemID
      this.newArrIdNew = Array.from(new Set(this.dataCartTotal.map(item => item.idItem))) ;
      // tim kiem trung nhau cua san pham
      this.newArrIdNew2.splice(0 , this.newArrIdNew2.length);
      for (let i =0 ; i < this.newArrIdNew.length; i++){
       let countId = 0;
        for(let j = 0; j < this.dataCartTotal.length; j++){
          if(this.dataCartTotal[j].idItem === this.newArrIdNew[i]){
            ++countId;
            if(countId === 1){
              this.newArrIdNew2.push(this.dataCartTotal[j]);
            }
          }
        }
        this.newArrIdNew2[i].count = countId;
      }
      console.log(this.newArrIdNew2);
    });
    this.dataInfoCustomer$.subscribe(item => {
      this.dataInfoCustomer.splice(0, this.dataInfoCustomer.length);
      this.dataInfoCustomer.push(item);
    });
  }
  public getRandomInt(min: number, max: number): any {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min) + min).toFixed(2);
  }

  public getRandomInt1(min: number, max: number): any {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min) + min).toFixed(0);
  }

  public removeDauTV(str: string): any {
    str = str.toString().replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.toString().replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.toString().replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.toString().replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.toString().replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.toString().replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.toString().replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.toString().replace(/đ/g, 'd');
    str = str.toString().replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.toString().replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.toString().replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.toString().replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.toString().replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.toString().replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.toString().replace(/Đ/g, 'D');
    // Combining Diacritical Marks
    str = str.toString().replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // huyền, sắc, hỏi, ngã, nặng
    str = str.toString().replace(/\u02C6|\u0306|\u031B/g, ''); // mũ â (ê), mũ ă, mũ ơ (ư)
    return str.toLowerCase();
  }
  public removeDauTVLink(str: any): any {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    // Combining Diacritical Marks
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // huyền, sắc, hỏi, ngã, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // mũ â (ê), mũ ă, mũ ơ (ư)
    return str.toLowerCase();
  }
  public unique(arr: any[]): any {
    let newArr: {idItem: '', count: 0}[] = [];
    newArr = arr.filter(function (item) {
      return newArr.includes(item.idItem) ? '' : newArr.push(item)
    })
    return newArr
  }

  public checkUrl(): boolean {
    if (window.location.href.includes('admin')) {
      return true;
    }
    return false;
  }
  public returnAvatar(fullName: string){
    const arrAvatar: string[] = [];
    // console.log('fullName', fullName);
    fullName.split(' ').forEach(item  => {
      arrAvatar.push(item.charAt(0));
    })
    arrAvatar.join('');
    // console.log('arrAvatar', arrAvatar.join(''), fullName);
    return [fullName, arrAvatar.join('')];
  }

  public idItemTrung(arr: any[]): any{
    return Array.from(new Set(arr));
  }
  public deleteDataCart(i: number): any{
    this.newArrIdNew2.splice(i, 1);
  }
  public tang(i: number): any {
    console.log('tang');
    this.newArrIdNew2[i].count++;
  }

  public giam(i: number): any {
    console.log('giam');
    this.newArrIdNew2[i].count--;
  }
}
