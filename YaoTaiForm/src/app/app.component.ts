import { Component ,OnInit} from '@angular/core';
import { Customer, ProjectInfo } from './_type/project-info';
import { MatDialog } from '@angular/material/dialog';
import { ProjectFormDialogComponent } from './project-form-dialog/project-form-dialog.component';
import { ProjectFormService } from './project-form.service';
import { BehaviorSubject, Subject, scan } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'YaoTaiForm';
  projectsInfo: ProjectInfo[] = [];

  num: number = 0; 
  bsubject: BehaviorSubject<number> = new BehaviorSubject(0);
  subject = new Subject<number>();

  constructor(private _dialog: MatDialog, private _projectFormService: ProjectFormService) {
    this.bsubject.subscribe((num) => console.log('Rxnum = ' + num))
    console.log(this.num);
  }

  ngOnInit(): void {
    this.projectsInfo = this._projectFormService.getProjectInfo();
  }

  onshow(){
    this._dialog.open(ProjectFormDialogComponent, {
      width: '50%',
    });
  }

  onadd(): void{
    this.num = this.num + 2;
    this.bsubject.next(this.bsubject.getValue()+1);
    console.log('mynum = ' + this.num);
  }

}
