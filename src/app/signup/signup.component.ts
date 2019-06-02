import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  veryfirstFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.veryfirstFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required, Validators.email]
    });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrlFNAME: ['', Validators.required],
      firstCtrlSNAME: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      secondCtr2: ['', Validators.required]
    });
  }

}
