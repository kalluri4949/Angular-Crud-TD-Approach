import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee.model';
@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css'],
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  selectedEmployeeId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.selectedEmployeeId = +this.route.snapshot.paramMap.get('id');
  }
  // This life cycle hook receives SimpleChanges as an Input parameter
  // We can use it to retrieve previous and current values as shown below
  // ngOnChanges(changes: SimpleChanges): void {
  //   const previousEmployee = changes.employee.previousValue as Employee;
  //   const currentEmployee = changes.employee.currentValue as Employee;

  //   console.log(
  //     'Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL')
  //   );
  //   console.log('Current : ' + currentEmployee.name);
  // }
}
