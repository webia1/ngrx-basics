import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/static/types';
import * as IssueActions from '../../store/issue/issue.actions';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
})
export class IssuesComponent implements OnInit {
  form: FormGroup;

  constructor(
    private store: Store<RootState>,
    private fb: FormBuilder,
  ) {
    this.form = this.initForm();
  }

  ngOnInit(): void {}

  initForm() {
    return this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['low', Validators.required],
    });
  }

  submit() {
    const id = this.randomId();
    const issue = { ...this.form.value, id };
    this.store.dispatch(IssueActions.submit({ issue }));
  }

  randomId() {
    return Math.random().toString().substr(2, 9);
  }
}
