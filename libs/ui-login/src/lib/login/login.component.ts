import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4)
      ]]
    })
  }

  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.router.navigate(['/projects']);
  }

}

