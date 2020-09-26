import { Router } from '@angular/router';
import { Employee } from './../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  searchTerm: string;
  employees: Employee[];
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }
  onClick(employeeId: number): void {
    this.router.navigate(['/employees', employeeId]);
  }
}
