import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../../../services/firebase.service";
import {MatDialogRef} from "@angular/material/dialog";
import {DataService} from "../../../services/data.service";
import {AngularEditorConfig} from "@kolkov/angular-editor";

@Component({
  selector: 'app-form-tintuc-details',
  templateUrl: './form-tintuc-details.component.html',
  styleUrls: ['./form-tintuc-details.component.scss']
})
export class FormTintucDetailsComponent implements OnInit {
  public formDataTintucDetails: FormGroup|any;
  public dataTintucMain: any[] = [];
  public isHiddenMeta = false;
  public isEdit = false;
  public dataPatchValue: any;
  public valueTieudeDetails: any;
  constructor(public fb: FormBuilder, public firebaseService: FirebaseService,
              public matDialogRef: MatDialogRef<FormTintucDetailsComponent>, public dataService: DataService) {
    this.formDataTintucDetails = this.fb.group({
      tintucMain: ['', [Validators.required]],
      tintucDetails: this.fb.group({
        name: ['', Validators.required],
        link: ['', Validators.required],
      }),
      imgMain: ['', Validators.required],
      contentTintuc: ['', Validators.required],
      dateTintuc: ['', Validators.required],
      productMetaName: this.fb.array([
        this.fb.group({
          name: ['author', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
        this.fb.group({
          name: ['description', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
        this.fb.group({
          name: ['abstract', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
        this.fb.group({
          name: ['copyright', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
        this.fb.group({
          name: ['name', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
        this.fb.group({
          name: ['name', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
      ]),
      productMetaProperty: this.fb.array([
        this.fb.group({
          property: ['og:url', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
        this.fb.group({
          property: ['og:type', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
        this.fb.group({
          property: ['og:title', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
        this.fb.group({
          property: ['og:description', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
        this.fb.group({
          property: ['og:image', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
        this.fb.group({
          property: ['property', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
      ]),
      productMetaGoogle: this.fb.array([
        this.fb.group({
          itemprop: ['name', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
        this.fb.group({
          itemprop: ['description', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
        this.fb.group({
          itemprop: ['image', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
        this.fb.group({
          itemprop: ['itemprop', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
        this.fb.group({
          itemprop: ['itemprop', [Validators.required]],
          content: ['content', [Validators.required]]
        }),
      ]),
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

  ngOnInit(): void {
    this.firebaseService.readFunctionalityList('/tin-tuc-main/formTintucList').subscribe((res: any[]) => {
      this.dataTintucMain = res;
    })
    if (this.isEdit) {
      this.formDataTintucDetails.patchValue(this.dataPatchValue);
    }

  }
  public clearAll() {

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
  public onSubmit(): void {
    this.clearAll();
    this.firebaseService.createFunctionalityList(this.formDataTintucDetails.value, '/tin-tuc-details');
    this.matDialogRef.close();
  }

  public saveRowData(): any {
    this.clearAll();
    this.matDialogRef.close({isEdit: true, data: this.formDataTintucDetails.value});
  }


  getProductMetaName() {
    return this.formDataTintucDetails.get('productMetaName') as FormArray;
  }

  getProductMetaProperty() {
    return this.formDataTintucDetails.get('productMetaProperty') as FormArray;
  }

  getProductMetaGoogle() {
    return this.formDataTintucDetails.get('productMetaGoogle') as FormArray;
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

  oldValue = '';
  onChange(NgModel: any) {
    // this.oldValue = NgModel;
  }
}
