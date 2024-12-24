import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-grp',
  templateUrl: './form-grp.component.html',
  styleUrl: './form-grp.component.scss'
})
export class FormGrpComponent {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      field1: [''],
      field2: [''],
      field3: [''],
      field4: [''],
    });
  }
}

