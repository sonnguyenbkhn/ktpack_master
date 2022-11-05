import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../../../services/firebase.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-form-product-main',
  templateUrl: './form-product-main.component.html',
  styleUrls: ['./form-product-main.component.scss']
})
export class FormProductMainComponent implements OnInit {
  public hiddenArr: any [] = [];
  public lengthArrMain = 0;
  public keyDataProductMain: any;
  public dataPatchValue: any;
  public formkeyDataProductMain: FormGroup|any;
  constructor(public fb: FormBuilder, public firebaseService: FirebaseService,
              public matDialogRef: MatDialogRef<FormProductMainComponent>) {
    this.formkeyDataProductMain = this.fb.group({
      productMainList: this.fb.array([
        this.fb.group({
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          icon: ['', [Validators.required]],
          productMainListMetaName: this.fb.array([
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
          productMainListMetaProperty: this.fb.array([
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
              content: ['property', [Validators.required]]
            }),
          ]),
          productMainListMetaGoogle: this.fb.array([
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
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          icon: ['', [Validators.required]],
          productMainListMetaName: this.fb.array([
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
          productMainListMetaProperty: this.fb.array([
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
              content: ['property', [Validators.required]]
            }),
          ]),
          productMainListMetaGoogle: this.fb.array([
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
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          icon: ['', [Validators.required]],
          productMainListMetaName: this.fb.array([
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
          productMainListMetaProperty: this.fb.array([
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
              content: ['property', [Validators.required]]
            }),
          ]),
          productMainListMetaGoogle: this.fb.array([
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
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          icon: ['', [Validators.required]],
          productMainListMetaName: this.fb.array([
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
          productMainListMetaProperty: this.fb.array([
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
              content: ['property', [Validators.required]]
            }),
          ]),
          productMainListMetaGoogle: this.fb.array([
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
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          icon: ['', [Validators.required]],
          productMainListMetaName: this.fb.array([
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
          productMainListMetaProperty: this.fb.array([
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
              content: ['property', [Validators.required]]
            }),
          ]),
          productMainListMetaGoogle: this.fb.array([
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
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          icon: ['', [Validators.required]],
          productMainListMetaName: this.fb.array([
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
          productMainListMetaProperty: this.fb.array([
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
              content: ['property', [Validators.required]]
            }),
          ]),
          productMainListMetaGoogle: this.fb.array([
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
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          icon: ['', [Validators.required]],
          productMainListMetaName: this.fb.array([
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
          productMainListMetaProperty: this.fb.array([
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
              content: ['property', [Validators.required]]
            }),
          ]),
          productMainListMetaGoogle: this.fb.array([
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
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          icon: ['', [Validators.required]],
          productMainListMetaName: this.fb.array([
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
          productMainListMetaProperty: this.fb.array([
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
              content: ['property', [Validators.required]]
            }),
          ]),
          productMainListMetaGoogle: this.fb.array([
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
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          icon: ['', [Validators.required]],
          productMainListMetaName: this.fb.array([
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
          productMainListMetaProperty: this.fb.array([
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
              content: ['property', [Validators.required]]
            }),
          ]),
          productMainListMetaGoogle: this.fb.array([
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
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          icon: ['', [Validators.required]],
          productMainListMetaName: this.fb.array([
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
          productMainListMetaProperty: this.fb.array([
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
              content: ['property', [Validators.required]]
            }),
          ]),
          productMainListMetaGoogle: this.fb.array([
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
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          icon: ['', [Validators.required]],
          productMainListMetaName: this.fb.array([
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
          productMainListMetaProperty: this.fb.array([
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
              content: ['property', [Validators.required]]
            }),
          ]),
          productMainListMetaGoogle: this.fb.array([
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
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          icon: ['', [Validators.required]],
          productMainListMetaName: this.fb.array([
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
          productMainListMetaProperty: this.fb.array([
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
              content: ['property', [Validators.required]]
            }),
          ]),
          productMainListMetaGoogle: this.fb.array([
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
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          icon: ['', [Validators.required]],
          productMainListMetaName: this.fb.array([
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
          productMainListMetaProperty: this.fb.array([
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
              content: ['property', [Validators.required]]
            }),
          ]),
          productMainListMetaGoogle: this.fb.array([
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
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          icon: ['', [Validators.required]],
          productMainListMetaName: this.fb.array([
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
          productMainListMetaProperty: this.fb.array([
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
              content: ['property', [Validators.required]]
            }),
          ]),
          productMainListMetaGoogle: this.fb.array([
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
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
          icon: ['', [Validators.required]],
          productMainListMetaName: this.fb.array([
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
          productMainListMetaProperty: this.fb.array([
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
              content: ['property', [Validators.required]]
            }),
          ]),
          productMainListMetaGoogle: this.fb.array([
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
      ]),
    })
    console.log(this.getproductMainList().controls.length);
    this.lengthArrMain = this.getproductMainList().controls.length;
    for (let i = 0; i < this.getproductMainList().controls.length; i++) {
      this.hiddenArr[i] = false;
    }
  }

  ngOnInit(): void {
    this.formkeyDataProductMain.patchValue(this.dataPatchValue);
  }
  clearAll(){
    let count = 7;
    while(count > 1){
      count--;
      console.log('ok');
      for (let j = 0; j < this.getproductMainList().controls.length; j++) {
        // console.log(this.getproductMainBrandList().controls.length);
        this.checkFormInvalid(j);
      }

      for (let j = 0; j < this.getproductMainList().controls.length; j++) {
        console.log('checklength', this.getproductMainListMetaGoogle(j).controls.length);
        for (let k = 0; k < this.getproductMainListMetaGoogle(j).controls.length; k++){
          this.checkFormMetaGoogle(j, k);
        }
        console.log('checklength', this.getproductMainListMetaProperty(j).controls.length);
        for (let k = 0; k < this.getproductMainListMetaProperty(j).controls.length; k++){
          this.checkFormMetaProperty(j, k);
        }
        console.log('checklength', this.getproductMainListMetaName(j).controls.length);
        for (let k = 0; k < this.getproductMainListMetaName(j).controls.length; k++){
          this.checkFormMetaName(j, k);
        }
      }

    }

  }

   getproductMainList(){
    return this.formkeyDataProductMain.get('productMainList') as FormArray;
  }
   getproductMainListMetaName(index: number){
    return this.getproductMainList().at(index).get('productMainListMetaName') as FormArray;
  }
   getproductMainListMetaProperty(index: number){
     return this.getproductMainList().at(index).get('productMainListMetaProperty') as FormArray;
  }
  getproductMainListMetaGoogle(index: number){
    return this.getproductMainList().at(index).get('productMainListMetaGoogle') as FormArray;
  }
  addkeyDataProductMainList(){
    const itemForm = this.formkeyDataProductMain.get('productMainList') as FormArray;
    itemForm.push(this.fb.group({
      name: ['', [Validators.required]],
      link: ['', [Validators.required]],
      productMainListMetaName: this.fb.array([
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
      productMainListMetaProperty: this.fb.array([
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
          content: ['property', [Validators.required]]
        }),
      ]),
      productMainListMetaGoogle: this.fb.array([
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

  addkeyDataProductMainListMetaName(index: number){
    this.getproductMainListMetaName(index).push(
      this.fb.group({
        name: ['', [Validators.required]],
        content: ['', [Validators.required]]
      })
    )
  }
  addkeyDataProductMainListMetaProperty(index: number){
   this.getproductMainListMetaProperty(index).push(
     this.fb.group({
       property: ['', [Validators.required]],
       content: ['', [Validators.required]]
     })
   )
  }
  addkeyDataProductMainListMetaGoogle(index: number){
    this.getproductMainListMetaGoogle(index).push(
      this.fb.group({
        itemprop: ['', [Validators.required]],
        content: ['', [Validators.required]]
      })
    )
  }
  deletekeyDataProductMainList(index: number){
    this.getproductMainList().removeAt(index);
  }
  deletekeyDataProductMainListMetaName(id1: number, id2: number){
    this.getproductMainListMetaName(id1).removeAt(id2);
  }
  deletekeyDataProductMainListMetaProperty(id1: number, id2: number){
    this.getproductMainListMetaProperty(id1).removeAt(id2);
  }
  deletekeyDataProductMainListMetaGoogle(id1: number, id2: number){
    this.getproductMainListMetaGoogle(id1).removeAt(id2);
  }
  insertkeyDataProductMain(index: number){
    const temp = this.formkeyDataProductMain.get('productMainList') as FormArray;
    temp.insert(index, this.fb.group({
      name: ['', [Validators.required]],
      link: ['', [Validators.required]],
      productMainListMetaName: this.fb.array([
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
      productMainListMetaProperty: this.fb.array([
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
          content: ['property', [Validators.required]]
        }),
      ]),
      productMainListMetaGoogle: this.fb.array([
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
    }));
  }

  checkFormInvalid(index: number) {
    var itemMain = this.getproductMainList().at(index);
    if (itemMain.value.name === '' || itemMain.value.link === '') {
      this.deletekeyDataProductMainList(index);
    }
    // console.log(item1.value);
  }
  checkFormMetaGoogle(id1: number ,id2: number){
    var itemGoogle = this.getproductMainListMetaGoogle(id1).at(id2);
    // console.log('itemprop', itemGoogle.value.itemprop);
    if (itemGoogle.value.itemprop === '') {
      this.deletekeyDataProductMainListMetaGoogle(id1, id2);
    }
  }
  checkFormMetaProperty(id1: number ,id2: number){
    var itemProperty = this.getproductMainListMetaProperty(id1).at(id2);
    if (itemProperty.value.property === '') {
      this.deletekeyDataProductMainListMetaProperty(id1, id2);
    }
  }
  checkFormMetaName(id1: number ,id2: number){
    var itemHtml = this.getproductMainListMetaName(id1).at(id2);
    if (itemHtml.value.name === '') {
      this.deletekeyDataProductMainListMetaName(id1, id2);
    }
  }

  public submitproductMainList(){
    this.firebaseService.createFunctionalityObject(this.formkeyDataProductMain.value, '/productMain');
    console.log(this.formkeyDataProductMain.value);
    this.matDialogRef.close();
  }

  public showHidden(index: number) {
    this.hiddenArr[index] = true;
  }

  public hideHidden(index: number) {
    this.hiddenArr[index] = false;
  }
}
