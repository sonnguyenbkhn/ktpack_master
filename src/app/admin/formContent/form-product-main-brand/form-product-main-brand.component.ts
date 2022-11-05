import {Component, OnInit} from '@angular/core';
import {Form, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {FirebaseService} from 'src/app/services/firebase.service';

@Component({
  selector: 'app-form-product-main-brand',
  templateUrl: './form-product-main-brand.component.html',
  styleUrls: ['./form-product-main-brand.component.scss']
})
export class FormProductMainBrandComponent implements OnInit {
  public formkeyDataProductMainBrand: FormGroup | any;
  public hiddenArr: any [] = [];
  public productMainList: any[] = [];
  public keyDataProductMainBrand: any;
  public dataPatchValue: any;
  public lengthArrMainBrand = 0;

  constructor(public fb: FormBuilder, public firebaseService: FirebaseService,
              public matDialogRef: MatDialogRef<FormProductMainBrandComponent>) {
    this.formkeyDataProductMainBrand = this.fb.group({
      productMainBrandList: this.fb.array([
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
        this.fb.group({
          nameMain: ['', [Validators.required]],
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          productMainBrandListMetaName: this.fb.array([
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
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
            this.fb.group({
              name: ['content', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaProperty: this.fb.array([
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
              property: ['og:property', [Validators.required]],
              content: ['content', [Validators.required]]
            }),
          ]),
          productMainBrandListMetaGoogle: this.fb.array([
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
          ])
        }),
      ])
    })
    console.log(this.getproductMainBrandList().controls.length);
    this.lengthArrMainBrand = this.getproductMainBrandList().controls.length;
    for (let i = 0; i < this.getproductMainBrandList().controls.length; i++) {
      this.hiddenArr[i] = false;
    }

  }

  ngOnInit(): void {
    this.firebaseService.readFunctionalityObject('/productMain/productMainList').subscribe((res: any[]) => {
      this.productMainList = res;
    })
    this.formkeyDataProductMainBrand.patchValue(this.dataPatchValue);
    console.log(this.getproductMainBrandList().controls.length);
    console.log(this.getproductMainBrandListMetaGoogle(31).controls.length);
  }
  clearAll(){
    let count = 7;
    while(count > 1){
      count--;
      console.log('ok');
      for (let j = 0; j < this.getproductMainBrandList().controls.length; j++) {
        // console.log(this.getproductMainBrandList().controls.length);
        this.checkFormInvalid(j);
      }

      for (let j = 0; j < this.getproductMainBrandList().controls.length; j++) {
        console.log('checklength', this.getproductMainBrandListMetaGoogle(j).controls.length);
        for (let k = 0; k < this.getproductMainBrandListMetaGoogle(j).controls.length; k++){
          this.checkFormMetaGoogle(j, k);
        }
        console.log('checklength', this.getproductMainBrandListMetaProperty(j).controls.length);
        for (let k = 0; k < this.getproductMainBrandListMetaProperty(j).controls.length; k++){
          this.checkFormMetaProperty(j, k);
        }
        console.log('checklength', this.getproductMainBrandListMetaName(j).controls.length);
        for (let k = 0; k < this.getproductMainBrandListMetaName(j).controls.length; k++){
          this.checkFormMetaName(j, k);
        }
      }

    }



  }

  getproductMainBrandList() {
    return this.formkeyDataProductMainBrand.get('productMainBrandList') as FormArray;
  }

  getproductMainBrandListMetaName(index: number) {
    return this.getproductMainBrandList().at(index).get('productMainBrandListMetaName') as FormArray;
  }

  getproductMainBrandListMetaProperty(index: number) {
    return this.getproductMainBrandList().at(index).get('productMainBrandListMetaProperty') as FormArray;
  }

  getproductMainBrandListMetaGoogle(index: number) {
    return this.getproductMainBrandList().at(index).get('productMainBrandListMetaGoogle') as FormArray;
  }

  addkeyDataProductMainBrandList() {
    const itemForm = this.formkeyDataProductMainBrand.get('productMainBrandList') as FormArray;
    itemForm.push(this.fb.group({
      name: ['', [Validators.required]],
      link: ['', [Validators.required]],
      productMainBrandListMetaName: this.fb.array([
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
      productMainBrandListMetaProperty: this.fb.array([
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
      productMainBrandListMetaGoogle: this.fb.array([
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
      ])
    }))
  }

  addkeyDataProductMainBrandListMetaName(index: number) {
    this.getproductMainBrandListMetaName(index).push(
      this.fb.group({
        name: ['', [Validators.required]],
        content: ['', [Validators.required]]
      })
    )
  }

  addkeyDataProductMainBrandListMetaProperty(index: number) {
    this.getproductMainBrandListMetaProperty(index).push(
      this.fb.group({
        property: ['', [Validators.required]],
        content: ['', [Validators.required]]
      })
    )
  }

  addkeyDataProductMainBrandListMetaGoogle(index: number) {
    this.getproductMainBrandListMetaGoogle(index).push(
      this.fb.group({
        itemprop: ['', [Validators.required]],
        content: ['', [Validators.required]]
      })
    )
  }

  public insertkeyDataProductMainBrand(index: number): any {
    const temp = this.formkeyDataProductMainBrand.get('productMainBrandList') as FormArray;
    temp.insert(index, this.fb.group({
      name: ['', [Validators.required]],
      link: ['', [Validators.required]],
      productMainBrandListMetaName: this.fb.array([
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
      productMainBrandListMetaProperty: this.fb.array([
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
      productMainBrandListMetaGoogle: this.fb.array([
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
      ])
    }));
  }

  checkFormInvalid(index: number) {
    var itemMain = this.getproductMainBrandList().at(index);
    if (itemMain.value.name === '' || itemMain.value.link === '') {
      this.deletekeyDataProductMainBrandList(index);
    }
    // console.log(item1.value);
  }
  checkFormMetaGoogle(id1: number ,id2: number){
    var itemGoogle = this.getproductMainBrandListMetaGoogle(id1).at(id2);
    // console.log('itemprop', itemGoogle.value.itemprop);
    if (itemGoogle.value.itemprop === '') {
      this.deletekeyDataProductMainBrandListMetaGoogle(id1, id2);
    }
  }
  checkFormMetaProperty(id1: number ,id2: number){
    var itemProperty = this.getproductMainBrandListMetaProperty(id1).at(id2);
    if (itemProperty.value.property === '') {
      this.deletekeyDataProductMainBrandListMetaProperty(id1, id2);
    }
  }
  checkFormMetaName(id1: number ,id2: number){
    var itemHtml = this.getproductMainBrandListMetaName(id1).at(id2);
    if (itemHtml.value.name === '') {
      this.deletekeyDataProductMainBrandListMetaName(id1, id2);
    }
  }


  deletekeyDataProductMainBrandList(index: number) {
    this.getproductMainBrandList().removeAt(index);
  }

  deletekeyDataProductMainBrandListMetaName(id1: number, id2: number) {
    this.getproductMainBrandListMetaName(id1).removeAt(id2);
  }

  deletekeyDataProductMainBrandListMetaProperty(id1: number, id2: number) {
    this.getproductMainBrandListMetaProperty(id1).removeAt(id2);
  }

  deletekeyDataProductMainBrandListMetaGoogle(id1: number, id2: number) {
    this.getproductMainBrandListMetaGoogle(id1).removeAt(id2);
  }

  public submitproductMainBrandList() {
    this.firebaseService.createFunctionalityObject(this.formkeyDataProductMainBrand.value, '/productMainBrand');
    console.log(this.formkeyDataProductMainBrand.value);
    this.matDialogRef.close();
  }

  public showHidden(index: number) {
    this.hiddenArr[index] = true;
  }

  public hideHidden(index: number) {
    this.hiddenArr[index] = false;
  }


}
