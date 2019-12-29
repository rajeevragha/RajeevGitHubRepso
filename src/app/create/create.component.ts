import { TitleValidators } from './create.validators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(8),
    TitleValidators.cannotContainSpecialChar, TitleValidators.shouldBeUnique]),
    description: new FormControl()
  });
  constructor() {
  }

  ngOnInit() {


  }
  submit(f: Form) {
    console.log('Local 2', localStorage['hi']);
    localStorage['hi'] = 'hi';
    console.log(f);
  }

  priorites = [
    { id: '1', priority: "High" },
    { id: '2', priority: "Low" },
    { id: '3', priority: "Normal" }
  ];

  get title() {

    console.log('Local ', localStorage['hi']);
    return this.form.get('title');
  }

}                       
