import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public progress: true;
  firstFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    type MatFormFieldAppearance = 'legacy' | 'standard' | 'fill' | 'outline';
   }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
