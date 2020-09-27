import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

// The @Injectable() decorator is used to inject other dependencies
// into this service. As our service does not have any dependencies
// at the moment, we may remove the @Injectable() decorator and the
// service works exactly the same way. However, Angular recomends
// to always use @Injectable() decorator to ensures consistency
@Injectable()
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '3',
      isActive: true,
      photoPath: 'assets/mark.png',
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: '2',
      isActive: true,
      photoPath: 'assets/mary.png',
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: '3',
      isActive: false,
      photoPath: 'assets/john.png',
    },
  ];

  getEmployees(): Observable<Employee[]> {
    return of(this.listEmployees).pipe(delay(2000));
  }
  getEmployee(empId: number): Employee {
    return this.listEmployees.find((e) => e.id === empId);
  }
  save(employee: Employee): void {
    if (employee.id === null) {
      // reduce() method reduces the array to a single value. This method executes
      // the provided function for each element of the array (from left-to-right)
      // When we implement the server side service to save data to the database
      // table, we do not have to compute the id, as the server will assing it
      // tslint:disable-next-line:only-arrow-functions
      const maxId = this.listEmployees.reduce((e1, e2) => {
        return e1.id > e2.id ? e1 : e2;
      }).id;
      employee.id = maxId + 1;

      this.listEmployees.push(employee);
    } else {
      const foundIndex = this.listEmployees.findIndex(
        (e) => e.id === employee.id
      );
      this.listEmployees[foundIndex] = employee;
    }
  }
}
