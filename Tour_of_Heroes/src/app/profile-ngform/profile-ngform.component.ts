import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDialog } from './profile-dialog';

@Component({
  selector: 'app-profile-ngform',
  templateUrl: './profile-ngform.component.html',
  styleUrls: ['./profile-ngform.component.css']
})
export class ProfileNgformComponent {

  countries: string[] = ["America", "Japan", "Taiwan", "West Taiwan"];
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.pattern(/^\d+$/)] ),
    sex: new FormControl(''),
    country: new FormControl(''),
  });
  constructor(public dialog: MatDialog) {

  }

  showInfo(){
    const dialogRef = this.dialog.open(ProfileDialog, {
      width: '250px',
      data: this.profileForm.value
    });

  
  }
}
