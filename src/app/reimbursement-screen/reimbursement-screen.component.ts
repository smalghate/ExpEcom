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
      otherInputMode: ['', Validators.required],
      otherInputPurpose: ['', Validators.required]
    });

  }

  rows = this.fb.array([]);
  ngOnInit() {
    this.addForm.addControl('rows', this.rows);
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      from: null,
      km: null,
      to: null,
      invNo: null,
      purpose: null,
      amt: null,
      mode: null,
      otherInputMode: null,
      otherInputPurpose: null
    });
  }
  listOptionsPurpose = [
    {
      'id': '1',
      'label': 'Market Visit'
    },
    {
      'id': '2',
      'label': 'Other City Travel'
    },
    {
      'id': '3',
      'label': 'office Visit'
    },
    {
      'id': '4',
      'label': 'Training'
    },
    {
      'id': '5',
      'label': 'Other'
    }
  ];
  listOptionsMode = [
    {
      'id': '1',
      'label': 'Bike'
    },
    {
      'id': '2',
      'label': 'Bus'
    },
    {
      'id': '3',
      'label': 'Taxi'
    },
    {
      'id': '4',
      'label': 'Train'
    },
    {
      'id': '5',
      'label': 'Auto'
    },
    {
      'id': '6',
      'label': 'Others'
    }
  ];
  selectedId: number;
  showValue(event) {
    this.selectedId = event;
  }


  onAddRow() {
    this.rows.push(this.createItemFormGroup());
  }


  setvalidate() {
    // TO do
  }

  changeRadioOption(event) {
    console.log(event.target.value);
  }
}
