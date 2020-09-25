import { Department } from './../models/department.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  gender = 'male';
  isActive = true;
  photoPath = '';
  previewPhoto = false;
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
  ];
  constructor() {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY',
      }
    );
  }

  ngOnInit(): void {}
  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm);
  }
  togglePhotoPreview(): void {
    this.previewPhoto = !this.previewPhoto;
  }
}
