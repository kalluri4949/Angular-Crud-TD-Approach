import { EmployeeService } from './employee.service';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css'],
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() searchTerm: string;
  // This output event will be used to notify parent component i.e
  // ListEmployeesComponent when an employee is deleted. so the
  // ListEmployeesComponent can delete that respective employee
  // from the filteredEmployees array to which the template is bound
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  // This property is used in the view template to show and hide
  // delete confirmation
  selectedEmployeeId: number;
  confirmDelete: false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.selectedEmployeeId = +this.route.snapshot.paramMap.get('id');
  }
  viewEmployee(): void {
    this.router.navigate(['/employees', this.employee.id], {
      queryParams: { searchTerm: this.searchTerm },
    });
  }
  editEmployee(): void {
    this.router.navigate(['/edit', this.employee.id]);
  }
  deleteEmployee(): void {
    this.employeeService.deleteEmployee(this.employee.id);
    this.notifyDelete.emit(this.employee.id);
  }
}
