import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submit(f: Form) {
    console.log(f);
  }

  priorites = [
    { id: '1', priority: "High" },
    { id: '2', priority: "Low" },
    { id: '3', priority: "Normal" }
  ]
}                       
