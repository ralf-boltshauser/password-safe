import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Password } from '../password';
import { PasswordService } from '../services/password.service';

@Component({
  selector: 'app-add-password',
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.scss']
})
export class AddPasswordComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Password) {}
  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
