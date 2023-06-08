import { Injectable } from '@angular/core';
import { ProjectInfo } from './_type/project-info';

@Injectable({
  providedIn: 'root'
})
export class ProjectFormService {

  private projectsInfo: ProjectInfo[] = [];
  constructor() { }

  getProjectInfo(): ProjectInfo[]{
    return this.projectsInfo;
  }

  addProjectInfo(projectInfo: ProjectInfo): void{
    this.projectsInfo.push(projectInfo);
  }
}
