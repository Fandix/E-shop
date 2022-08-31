import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(
    private _dialogRef: MatDialogRef<RegisterComponent>,
    private _fb: FormBuilder
  ) {
    this.formGroup = this._fb.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  onDialogClosed() {
    this._dialogRef.close();
  }
}
