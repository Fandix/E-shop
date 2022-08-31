import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private _fb: FormBuilder, private _dialog: MatDialog) {
    this.formGroup = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onLogin() {
    const userInfo = this.formGroup.value;

    // login API
  }

  onRegisterClicked() {
    const dialogRef = this._dialog.open(RegisterComponent);
  }

}
