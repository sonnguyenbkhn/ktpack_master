import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FirebaseService} from "../../../services/firebase.service";

@Component({
  selector: 'app-form-info-company',
  templateUrl: './form-info-company.component.html',
  styleUrls: ['./form-info-company.component.scss']
})
export class FormInfoCompanyComponent implements OnInit {
  public formInfoCompany: FormGroup| any;
  public dataPatchValue: any;
  public isEdit = false;
  constructor(public dialog: MatDialog, public fb: FormBuilder, public firebaseService: FirebaseService,
  public matDialogRef: MatDialogRef<FormInfoCompanyComponent>) {

    this.formInfoCompany = this.fb.group({
      nameCompany: ['', Validators.required],
      imgLogo: ['', Validators.required],
      tonchi: ['', Validators.required],
      phoneNumber1: ['', Validators.required],
      phoneNumber2: ['', Validators.required],
      hotline: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      website: ['', Validators.required],
      map: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    if (this.isEdit) {
      this.formInfoCompany.patchValue(this.dataPatchValue);
    }
  }
  public onSubmit(): void {
    this.firebaseService.createFunctionalityObject(this.formInfoCompany.value, '/info-company');
    this.matDialogRef.close();
  }

  public saveRowData(): any {
    this.matDialogRef.close({isEdit: true, data: this.formInfoCompany.value});
  }

}
