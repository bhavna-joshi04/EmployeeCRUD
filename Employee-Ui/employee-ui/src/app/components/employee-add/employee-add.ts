import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { Employee } from '../../models/employee.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-add.html',
})
export class EmployeeAdd {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, public router: Router) {}

  onSubmit() {
  this.employeeService.addEmployee(this.employee).subscribe({
    next: () => {
      alert('Employee added successfully!');
      this.router.navigate(['/']);
    },
    error: err => {
      console.error('Error adding employee:', err.error);
      alert('Failed to add employee: ' + JSON.stringify(err.error));
    }
  });
}
}
