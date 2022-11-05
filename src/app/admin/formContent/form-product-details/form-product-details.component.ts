import {Component, OnInit} from '@angular/core';
import {Form, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../../../services/firebase.service";
import {MatDialogRef} from "@angular/material/dialog";
import {DataService} from "../../../services/data.service";
import {AngularEditorConfig} from "@kolkov/angular-editor";

@Component({
  selector: 'app-form-product-details',
  templateUrl: './form-product-details.component.html',
  styleUrls: ['./form-product-details.component.scss']
})
export class FormProductDetailsComponent implements OnInit {
  public isEdit = false;
  public dataPatchValue: any;
  public formDataProductDetails: FormGroup | any;
  public dataProductMain: any[] = [];
  public dataProductMainBrand: any[] = [];
  public isHiddenMeta = false;
  public isHiddenImg = false;
  public isHiddenDescription = false;
  public isHiddenComment = false;

  constructor(public fb: FormBuilder, public firebaseService: FirebaseService,
              public matDialogRef: MatDialogRef<FormProductDetailsComponent>, public dataService: DataService) {
    this.formDataProductDetails = this.fb.group({
      addCart: [false],
      checkBox: [false],
      productMain: ['', [Validators.required]],
      productMainBrand: ['', [Validators.required]],
      productDetails: this.fb.group({
        name: ['', Validators.required],
        link: ['', Validators.required],
      }),
      address: ['Hưng Yên', [Validators.required]],
      price: ['Liên hệ', [Validators.required]],
      sellNumber: [`${this.dataService.getRandomInt(1, 3)}`, [Validators.required, Validators.pattern('^\\d+\\.?\\d*$')]],
      like: [false],
      star: [`${this.dataService.getRandomInt(4, 5)}`, [Validators.required, Validators.pattern('^\\d+\\.?\\d*$')]],
      discount: [`${this.dataService.getRandomInt1(10, 30)}`, [Validators.required, Validators.pattern('^\\d+\\.?\\d*$')]],
      evaluate: [`${this.dataService.getRandomInt1(200, 500)}`, [Validators.required, Validators.pattern('^\\d+\\.?\\d*$')]],
      description: this.fb.group({
        mota: ['', [Validators.required]],
        thongso: ['', [Validators.required]],
      }),
      // title: [''], content: ['']
      img: this.fb.array([
        this.fb.group({
          name: ['tên ảnh', [Validators.required]],
          link: ['', [Validators.required]],
        }),
        this.fb.group({
          name: ['tên ảnh', [Validators.required]],
          link: ['', [Validators.required]],
        }),
        this.fb.group({
          name: ['tên ảnh', [Validators.required]],
          link: ['', [Validators.required]],
        }),
        this.fb.group({
          name: ['tên ảnh', [Validators.required]],
          link: ['', [Validators.required]],
        }),
      ]),
      productMetaName: this.fb.array([
        this.fb.group({
          name: ['author', [Validators.required]],
          content: ['', [Validators.required]]
        }),
        this.fb.group({
          name: ['description', [Validators.required]],
          content: ['', [Validators.required]]
        }),
        this.fb.group({
          name: ['abstract', [Validators.required]],
          content: ['', [Validators.required]]
        }),
        this.fb.group({
          name: ['copyright', [Validators.required]],
          content: ['', [Validators.required]]
        }),
        this.fb.group({
          name: ['', [Validators.required]],
          content: ['', [Validators.required]]
        }),
        this.fb.group({
          name: ['', [Validators.required]],
          content: ['', [Validators.required]]
        }),
      ]),
      productMetaProperty: this.fb.array([
        this.fb.group({
          property: ['og:url', [Validators.required]],
          content: ['', [Validators.required]]
        }),
        this.fb.group({
          property: ['og:type', [Validators.required]],
          content: ['', [Validators.required]]
        }),
        this.fb.group({
          property: ['og:title', [Validators.required]],
          content: ['', [Validators.required]]
        }),
        this.fb.group({
          property: ['og:description', [Validators.required]],
          content: ['', [Validators.required]]
        }),
        this.fb.group({
          property: ['og:image', [Validators.required]],
          content: ['', [Validators.required]]
        }),
        this.fb.group({
          property: ['', [Validators.required]],
          content: ['', [Validators.required]]
        }),
      ]),
      productMetaGoogle: this.fb.array([
        this.fb.group({
          itemprop: ['name', [Validators.required]],
          content: ['', [Validators.required]]
        }),
        this.fb.group({
          itemprop: ['description', [Validators.required]],
          content: ['', [Validators.required]]
        }),
        this.fb.group({
          itemprop: ['image', [Validators.required]],
          content: ['', [Validators.required]]
        }),
        this.fb.group({
          itemprop: ['', [Validators.required]],
          content: ['', [Validators.required]]
        }),
        this.fb.group({
          itemprop: ['', [Validators.required]],
          content: ['', [Validators.required]]
        }),
      ]),
      comment: this.fb.array([
        this.fb.group({
          name: '', content: '', time: '', star: '4.5'
        }),
        this.fb.group({
          name: '', content: '', time: '', star: '4.5'
        }),
        this.fb.group({
          name: '', content: '', time: '', star: '4.5'
        }),
        this.fb.group({
          name: '', content: '', time: '', star: '4.5'
        }),
        this.fb.group({
          name: '', content: '', time: '', star: '4.5'
        }),
        this.fb.group({
          name: '', content: '', time: '', star: '4.5'
        }),
        this.fb.group({
          name: '', content: '', time: '', star: '4.5'
        }),
        this.fb.group({
          name: '', content: '', time: '', star: '4.5'
        }),
        this.fb.group({
          name: '', content: '', time: '', star: '4.5'
        }),
        this.fb.group({
          name: '', content: '', time: '', star: '4.5'
        }),
      ])
    })
    this.firebaseService.readFunctionalityObject('/productMain/productMainList').subscribe((res: any) => {
      console.log(res);
      this.dataProductMain = res;
    })
    this.firebaseService.readFunctionalityObject('/productMainBrand/productMainBrandList').subscribe((res: any) => {
      console.log(res)
      this.dataProductMainBrand = res;
    })
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '1rem',
    maxHeight: 'auto',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    toolbarPosition: 'top',
    fonts: [
      {class: 'foro', name: 'foro'},
      {class: 'hevatica-regular', name: 'hevatica-regular'},
      {class: 'hevatica-light', name: 'hevatica-light'},
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };
  ngOnInit(): void {
    if (this.isEdit) {
      this.formDataProductDetails.patchValue(this.dataPatchValue);
    }

  }

  public clearAll() {
    console.log(this.getImg().controls.length);
    console.log(this.getProductMetaGoogle().controls.length);
    let count = 3;
    while (count > 1) {
      for (let i = 0; i < this.getProductMetaGoogle().controls.length; i++) {
        this.checkFormMetaGoogle(i);
      }
      for (let i = 0; i < this.getProductMetaProperty().controls.length; i++) {
        this.checkFormMetaProperty(i);
      }
      for (let i = 0; i < this.getProductMetaName().controls.length; i++) {
        this.checkFormMetaName(i);
      }
      for (let i = 0; i < this.getComment().controls.length; i++) {
        this.checkFormComment(i);
      }
      count--;
    }

  }

  public checkImgExist(index: number) {
    console.log(this.getImg().at(index).value);
    const item = this.getImg().at(index);
    if (item.value.name === '') {
      this.deleteDataProductDetailsImg(index);
    }
  }

  public onSubmit(): void {
    this.clearAll();
    this.firebaseService.createFunctionalityList(this.formDataProductDetails.value, '/productDetails');
    this.matDialogRef.close();
  }

  public saveRowData(): any {
    this.clearAll();
    this.matDialogRef.close({isEdit: true, data: this.formDataProductDetails.value});
  }

  getImg() {
    return this.formDataProductDetails.get('img') as FormArray;
  }
  getComment(){
    return this.formDataProductDetails.get('comment') as FormArray;
  }
  getProductMetaName() {
    return this.formDataProductDetails.get('productMetaName') as FormArray;
  }

  getProductMetaProperty() {
    return this.formDataProductDetails.get('productMetaProperty') as FormArray;
  }

  getProductMetaGoogle() {
    return this.formDataProductDetails.get('productMetaGoogle') as FormArray;
  }
  addDataProductDetailsComment(){
    this.getComment().push(
      this.fb.group({
        name: ['', [Validators.required]],
        content: ['', [Validators.required]],
        time: ['', [Validators.required]],
        star: ['', [Validators.required]],
      }),
    )
  }

  addDataProductDetailsMetaName() {
    this.getProductMetaName().push(
      this.fb.group({
        name: ['', [Validators.required]],
        content: ['', [Validators.required]]
      }),
    )
  }

  addDataProductDetailsMetaGoogle() {
    this.getProductMetaGoogle().push(
      this.fb.group({
        itemprop: ['', [Validators.required]],
        content: ['', [Validators.required]]
      }),
    )
  }

  addDataProductDetailsMetaProperty() {
    this.getProductMetaProperty().push(
      this.fb.group({
        property: ['', [Validators.required]],
        content: ['', [Validators.required]]
      }),
    )
  }

  addDataProductDetailsImg() {
    this.getImg().push(
      this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }),
    )
  }

  deleteDataProductDetailsComment(index: number){
    this.getComment().removeAt(index);
  }

  deleteDataProductDetailsMetaName(index: number) {
    this.getProductMetaName().removeAt(index);
  }

  deleteDataProductDetailsMetaGoogle(index: number) {
    this.getProductMetaGoogle().removeAt(index);
  }

  deleteDataProductDetailsMetaProperty(index: number) {
    this.getProductMetaProperty().removeAt(index);
  }


  deleteDataProductDetailsImg(index: number) {
    this.getImg().removeAt(index);
  }



  insertDataProductDetailsImg(index: number) {
    this.getImg().insert(index,
      this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      })
    );
  }

  checkFormComment(id2:number){
    var itemComment = this.getComment().at(id2);
    if (itemComment.value.name === '') {
      this.deleteDataProductDetailsComment(id2);
    }
  }

  checkFormMetaGoogle(id2: number) {
    var itemGoogle = this.getProductMetaGoogle().at(id2);
    // console.log('itemprop', itemGoogle.value.itemprop);
    if (itemGoogle.value.itemprop === '') {
      this.deleteDataProductDetailsMetaGoogle(id2);
    }
  }

  checkFormMetaProperty(id2: number) {
    var itemProperty = this.getProductMetaProperty().at(id2);
    if (itemProperty.value.property === '') {
      this.deleteDataProductDetailsMetaProperty(id2);
    }
  }

  checkFormMetaName(id2: number) {
    var itemHtml = this.getProductMetaName().at(id2);
    if (itemHtml.value.name === '') {
      this.deleteDataProductDetailsMetaName(id2);
    }
  }


  showHidden(keyword: string) {
    if (keyword === 'meta') {
      this.isHiddenMeta = true;
    } else if (keyword === 'img') {
      this.isHiddenImg = true;
    } else if (keyword == 'description') {
      this.isHiddenDescription = true;
    }else if (keyword == 'comment') {
      this.isHiddenComment = true;
    }

  }

  hideHidden(keyword: string) {
    if (keyword === 'meta') {
      this.isHiddenMeta = false;
    } else if (keyword === 'img') {
      this.isHiddenImg = false;
    } else if (keyword == 'description') {
      this.isHiddenDescription = false;
    }else if (keyword == 'comment') {
      this.isHiddenComment = false;
    }
  }



}
