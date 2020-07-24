import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
import { from } from 'rxjs';
@Component({
  selector: 'app-reimbursement-screen',
  templateUrl: './reimbursement-screen.component.html',
  styleUrls: ['./reimbursement-screen.component.scss']
})
export class ReimbursementScreenComponent implements OnInit {

  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      amt: ['', Validators.required],
      form: ['', Validators.required],
      to: ['', Validators.required],
      purpose: ['', Validators.required],
      mode: ['', Validators.required],
    });
  
  }
  
  rows = this.fb.array([]);
  ngOnInit() {
        this.addForm.addControl('rows', this.rows);
  }

  onAddRow() {
    this.rows.push(this.createItemFormGroup());
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      from: null,
      km:null,
      to: null,
      invNo:null,
      purpose: null,
      amt:null,
      mode:null,
    });
  }

  setvalidate(){
   // TO do
  }

  changeRadioOption(event) {
    console.log(event.target.value);
  }
}
