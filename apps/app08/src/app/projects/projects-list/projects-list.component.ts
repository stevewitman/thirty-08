import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '@nx08/core-data';

@Component({
  selector: 'nx08-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Project[];
  @Output() selecting = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
}
