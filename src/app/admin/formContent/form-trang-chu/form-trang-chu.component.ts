import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FirebaseService} from "../../../services/firebase.service";

@Component({
  selector: 'app-form-trang-chu',
  templateUrl: './form-trang-chu.component.html',
  styleUrls: ['./form-trang-chu.component.scss']
})
export class FormTrangChuComponent implements OnInit {
  public formTrangchu: FormGroup| any;
  public dataPatchValue: any;
  public isEdit = false;
  public isHiddenMeta = false;
  config: AngularEditorConfig = {
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
  constructor(public dialog: MatDialog, public fb: FormBuilder, public firebaseService: FirebaseService,
              public matDialogRef: MatDialogRef<FormTrangChuComponent>) {
    this.formTrangchu = this.fb.group({
      imgRight: this.fb.array([
        this.fb.group({
          name: '',
          link: '',
          linkRouting: '',
        }),
        this.fb.group({
          name: '',
          link: '',
          linkRouting: '',
        }),
        this.fb.group({
          name: '',
          link: '',
          linkRouting: '',
        })
      ]),
      imgLeft: this.fb.array([
        this.fb.group({
          name: '',
          link: '',
          linkRouting: '',
        }),
        this.fb.group({
          name: '',
          link: '',
          linkRouting: '',
        }),
        this.fb.group({
          name: '',
          link: '',
          linkRouting: '',
        })
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
    })
  }

  ngOnInit(): void {
    if (this.isEdit) {
      this.formTrangchu.patchValue(this.dataPatchValue);
    }
  }
  getImgRight(){
    return this.formTrangchu.get('imgRight') as  FormArray;
  }
  getImgLeft(){
    return this.formTrangchu.get('imgLeft') as  FormArray;
  }

  public onSubmit(): void {
    this.clearAll();
    this.firebaseService.createFunctionalityObject(this.formTrangchu.value, '/trang-chu');
    this.matDialogRef.close();
  }

  public saveRowData(): any {
    this.matDialogRef.close({isEdit: true, data: this.formTrangchu.value});
  }

  getProductMetaName() {
    return this.formTrangchu.get('productMetaName') as FormArray;
  }

  getProductMetaProperty() {
    return this.formTrangchu.get('productMetaProperty') as FormArray;
  }

  getProductMetaGoogle() {
    return this.formTrangchu.get('productMetaGoogle') as FormArray;
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

  deleteDataProductDetailsMetaName(index: number) {
    this.getProductMetaName().removeAt(index);
  }

  deleteDataProductDetailsMetaGoogle(index: number) {
    this.getProductMetaGoogle().removeAt(index);
  }

  deleteDataProductDetailsMetaProperty(index: number) {
    this.getProductMetaProperty().removeAt(index);
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

  clearAll() {
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
      count--;
    }

  }
  showHidden(keyword: string) {
    if (keyword === 'meta') {
      this.isHiddenMeta = true;
    }
  }

  hideHidden(keyword: string) {
    if (keyword === 'meta') {
      this.isHiddenMeta = false;
    }
  }
}
