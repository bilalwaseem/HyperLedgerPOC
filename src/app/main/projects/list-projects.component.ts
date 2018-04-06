import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  projects: Project[] = [{
      
    projectNumber: "String",
    description: "String",
    technicalDescription: "hello",
    projectInterviewStatus: "hello"
  },
  {
    projectNumber: "String",
    description: "String",
    technicalDescription: "hello",
    projectInterviewStatus: "hello"
  }];

  constructor() { }

  ngOnInit() {
  }

}
