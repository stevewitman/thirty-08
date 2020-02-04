import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { ProjectsService } from '@nx08/core-data';

@Component({
  selector: 'nx08-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  _project$;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService,
    private router: Router,
  ) { }

  public get project$() {
    return this._project$;
  }

  public set project$(value) {
    this._project$ = value;
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.project$ = this.projectService.getProject(id);
    })
  }

  onClick() {
    this.router.navigate(['/projects']);
  }

}
