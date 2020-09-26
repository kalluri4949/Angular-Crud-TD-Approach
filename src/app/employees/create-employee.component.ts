import { Department } from './../models/department.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm', { static: false })
  public createEmployeeForm: NgForm;
  datePickerConfig: Partial<BsDatepickerConfig>;
  gender = 'male';
  isActive = true;
  photoPath = '';
  previewPhoto = false;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: '',
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null,
  };
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
  ];
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY',
      }
    );
  }

  ngOnInit(): void {}
  saveEmployee(): void {
    this.employeeService.save(this.employee);
    this.router.navigate(['list']);
  }
  togglePhotoPreview(): void {
    this.previewPhoto = !this.previewPhoto;
  }
}
