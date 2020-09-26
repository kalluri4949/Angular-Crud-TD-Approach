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
  employees: Employee[];
  filteredEmployees: Employee[];
  // tslint:disable-next-line:variable-name
  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }

  // This setter is called everytime the value in the search text box changes
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  filterEmployees(searchTerm: string): Employee[] {
    return this.employees.filter(
      (employee) =>
        employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
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
