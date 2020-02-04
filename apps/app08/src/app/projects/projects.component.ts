import { Component, OnInit } from '@angular/core';

import { ProjectsService, Project } from '@nx08/core-data';

@Component({
  selector: 'nx08-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$;

  constructor(
    private projectsService: ProjectsService,
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projects$ = this.projectsService.getProjects();
  }

}
