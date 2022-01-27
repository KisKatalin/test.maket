import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  fieldsForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    name: new FormControl('', [
      Validators.required,
    ]),
    surname: new FormControl('', [
      Validators.required,
    ]),
    subject: new FormControl('', [
      Validators.required,
    ]),
    text: new FormControl('', [
      Validators.required,
    ])

  });
  constructor() { }
  

  ngOnInit(): void {
  }
 
}
