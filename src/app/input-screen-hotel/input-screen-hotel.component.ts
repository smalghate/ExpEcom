import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'


@Component({
  selector: 'app-input-screen-hotel',
  templateUrl: './input-screen-hotel.component.html',
  styleUrls: ['./input-screen-hotel.component.scss']
})
export class InputScreenHotelComponent implements OnInit {

  addForm: FormGroup;

  rows: FormArray;
  itemForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.addForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required]
    });

    this.rows = this.fb.array([]);

  }

  ngOnInit() {
  
        // this.addForm.get("items_value").setValue("yes");
        this.addForm.addControl('rows', this.rows);
  }

  onAddRow() {
    this.rows.push(this.createItemFormGroup());
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      from: null,
      to: null,
      purpose: null,
      mode:null,
    });
  }

}
