import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {FirebaseService} from '../../../services/firebase.service';

@Component({
  selector: 'app-form-account',
  templateUrl: './form-account.component.html',
  styleUrls: ['./form-account.component.scss']
})
export class FormAccountComponent implements OnInit {
  public accountForm: FormGroup| any;
  public formDataAcc: any;
  constructor(public fb: FormBuilder, public matDialogRef: MatDialogRef<FormAccountComponent>, public firebaseService: FirebaseService) {
    this.accountForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.accountForm.patchValue(this.formDataAcc);
  }
  public updateAcc(): any{
    this.firebaseService.createFunctionalityObject(this.accountForm.value, '/account');
    console.log(this.accountForm.value);
    this.matDialogRef.close();
  }

}
