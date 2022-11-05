import { Component, OnInit } from '@angular/core';
import {ContentCartComponent} from "../content-cart.component";

@Component({
  selector: 'app-content-cart-form',
  templateUrl: './content-cart-form.component.html',
  styleUrls: ['./content-cart-form.component.scss']
})
export class ContentCartFormComponent implements OnInit {
  public dataPatchValue: any;
  public dataPatchValue1: any;
  constructor() { }

  ngOnInit(): void {

  }

}
