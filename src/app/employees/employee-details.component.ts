import { Employee } from './../models/employee.model';
import { EmployeeService } from './employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _id: number;
  employee: Employee;
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = +params.get('id');
      this.employee = this.employeeService.getEmployee(this._id);
    });
  }
  getNextEmployee(): void {
    if (this._id < 3) {
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }

    this.router.navigate(['/employees', this._id], {
      queryParamsHandling: 'preserve',
    });
  }
}
