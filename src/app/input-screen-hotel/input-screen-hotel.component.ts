import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'

@Component({
  selector: 'app-input-screen-hotel',
  templateUrl: './input-screen-hotel.component.html',
  styleUrls: ['./input-screen-hotel.component.scss']
})
export class InputScreenHotelComponent implements OnInit {

  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      amt: ['', Validators.required],
      form: ['', Validators.required],
      to: ['', Validators.required],
      purpose: ['', Validators.required],
      mode: ['', Validators.required],
      fromDatePicker: ['', Validators.required],
      toDatePicker: ['', Validators.required],
    });

  }

  rows = this.fb.array([]);

  ngOnInit() {
    this.addForm.addControl('rows', this.rows);
    this.addForm.patchValue({
      fromDatePicker: Date.now(),
      toDatePicker: Date.now()
    });
  }

  onAddRow() {
    this.rows.push(this.createItemFormGroup());
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      km: null,
      invNo: null,
      purpose: null,
      amt: null,
      toDatePicker: [''],
      fromDatePicker: [''],
    });
  }

  setvalidate() {
    // TODO
  }

  changeRadioOption(event) {
    console.log(event.target.value);
  }
}