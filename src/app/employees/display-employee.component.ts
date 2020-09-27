import {
  Component,
  Input,
  OnChanges,
  OnInit,
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
  selectedEmployeeId: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

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
}
