import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  age: number;
  sex: string;
  country: string;
}

@Component({
  selector: 'ProfileDialog',
  template: `
    <h1 mat-dialog-title>表單資訊</h1>
    <div mat-dialog-content>
      <p>姓名: {{data.name}}</p>
      <p>年齡: {{data.age}}</p>
      <p>性別: {{data.sex}}</p>
      <p>國家: {{data.country}}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">關閉</button>
    </div>
  `,
})
export class ProfileDialog {

  constructor(
    public dialogRef: MatDialogRef<ProfileDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
