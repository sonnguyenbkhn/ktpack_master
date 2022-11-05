import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FirebaseService} from "../../../services/firebase.service";

@Component({
  selector: 'app-form-lienhe',
  templateUrl: './form-lienhe.component.html',
  styleUrls: ['./form-lienhe.component.scss']
})
export class FormLienheComponent implements OnInit {
  public formLienhe: FormGroup| any;
  public dataPatchValue: any;
  public isEdit = false;

  constructor(public dialog: MatDialog, public fb: FormBuilder, public firebaseService: FirebaseService,
              public matDialogRef: MatDialogRef<FormLienheComponent>) {
    this.formLienhe = this.fb.group({
      img1: this.fb.group({
        name: '',
        link: ''
      })
    })
  }
  ngOnInit(): void {

  }

}
