import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FirebaseService} from "../../../services/firebase.service";
import {AngularEditorConfig} from "@kolkov/angular-editor";

@Component({
  selector: 'app-form-tintuc-main',
  templateUrl: './form-tintuc-main.component.html',
  styleUrls: ['./form-tintuc-main.component.scss']
})
export class FormTintucMainComponent implements OnInit {
  public hiddenArr: any [] = [];
  public formTintuc: FormGroup | any;
  public dataPatchValue: any;
  public isEdit = false;
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
              public matDialogRef: MatDialogRef<FormTintucMainComponent>) {

    this.formTintuc = this.fb.group({
      formTintucList: this.fb.array([
        this.fb.group({
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
        }),
        this.fb.group({
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
        }),
        this.fb.group({
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
        }),
        this.fb.group({
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
        }),
        this.fb.group({
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
        }),
        this.fb.group({
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
        }),
        this.fb.group({
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
        }),
        this.fb.group({
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
        }),
        this.fb.group({
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
        }),
        this.fb.group({
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
        }),
        this.fb.group({
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
        }),
      ]),
    })
    for (let i = 0; i < this.getFormTintucList().controls.length; i++) {
      this.hiddenArr[i] = false;
    }
  }

  ngOnInit(): void {
    if (this.isEdit) {
      this.formTintuc.patchValue(this.dataPatchValue);
    }
  }

  public onSubmit(): void {
    this.firebaseService.createFunctionalityObject(this.formTintuc.value, '/tin-tuc');
    this.matDialogRef.close();
  }

  public saveRowData(): any {
    this.matDialogRef.close({isEdit: true, data: this.formTintuc.value});
  }
  getFormTintucList(){
    return this.formTintuc.get('formTintucList') as FormArray;
  }

  getproductMainListMetaName(index: number){
    return this.getFormTintucList().at(index).get('productMainListMetaName') as FormArray;
  }
  getproductMainListMetaProperty(index: number){
    return this.getFormTintucList().at(index).get('productMainListMetaProperty') as FormArray;
  }
  getproductMainListMetaGoogle(index: number){
    return this.getFormTintucList().at(index).get('productMainListMetaGoogle') as FormArray;
  }

  addFormTintucList(){
    const itemForm = this.formTintuc.get('formTintucList') as FormArray;
    itemForm.push(
      this.fb.group({
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
      }),
    )
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


  insertFormTintucList(index: number){
    const temp = this.formTintuc.get('formTintucList') as FormArray;
    temp.insert(index,
      this.fb.group({
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
      }),
      )
  }


  deleteFormTintucList(index: number){
    this.getFormTintucList().removeAt(index);
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

  checkFormInvalid(index: number) {
    var itemMain = this.getFormTintucList().at(index);
    if (itemMain.value.name === '' || itemMain.value.link === '') {
      this.deleteFormTintucList(index);
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

  showHidden(index: number){
    this.hiddenArr[index] = true;
  }
  hideHidden(index: number){
    this.hiddenArr[index] = false;
  }

  public submitFormTintucList(){
    this.firebaseService.createFunctionalityObject(this.formTintuc.value, '/tin-tuc-main');
    console.log(this.formTintuc.value);
    this.matDialogRef.close();
  }
  clearAll(){
    let count = 7;
    while(count > 1){
      count--;
      console.log('ok');
      for (let j = 0; j < this.getFormTintucList().controls.length; j++) {
        // console.log(this.getproductMainBrandList().controls.length);
        this.checkFormInvalid(j);
      }

      for (let j = 0; j < this.getFormTintucList().controls.length; j++) {
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
}
