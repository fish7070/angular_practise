import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer, Product, ProjectInfo } from '../_type/project-info';
import { Customers } from '../_data/customer-data';
import { Products } from '../_data/product-data';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjectFormService } from '../project-form.service';

@Component({
  selector: 'app-project-form-dialog',
  templateUrl: './project-form-dialog.component.html',
  styleUrls: ['./project-form-dialog.component.css']
})
export class ProjectFormDialogComponent {

  projectsInfo: ProjectInfo[] = [];
  projectInfo?: ProjectInfo;
  customers = Customers;
  products = Products;
  
  projectForm = new FormGroup({
    id: new FormControl('',[Validators.required, Validators.pattern(/^\d+$/)]),
    taskid: new FormControl('',[Validators.required]),
    purchaseid: new FormControl('',[Validators.required]),
    workday: new FormControl('',[Validators.required]),
    deadline: new FormControl('',[Validators.required]),
    product: new FormControl(),
    customer: new FormControl(),
    taskquantity: new FormControl('',[Validators.required]),
  })

  constructor(private _dialogRef: MatDialogRef<ProjectFormDialogComponent>, private _projectFormService: ProjectFormService){}

  onsave(){

    this.projectInfo = this.projectForm.value as unknown as ProjectInfo;

    this._projectFormService.addProjectInfo(this.projectInfo);
    console.log(this.projectForm.value);
    console.log(this.projectInfo);
    this._dialogRef.close();
  }

  ondebug(){
    console.log(this.projectInfo);
  }

  oncancel(){
    this._dialogRef.close();
  }
}
