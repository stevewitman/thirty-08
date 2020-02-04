import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'nx08-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  currentProject;
  originalTitle;

  @Input() set project(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  };
  @Input() form: FormGroup;
  @Output() saving = new EventEmitter();
  @Output() cancelling = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.saving.emit(this.form.value);
  }

  onClear() {
    this.cancelling.emit(this.currentProject);
  }

}
