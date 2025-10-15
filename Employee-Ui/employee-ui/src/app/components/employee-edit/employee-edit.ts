import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee';

@Component({
  selector: 'app-employee-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-edit.html',
  styleUrls: ['./employee-edit.css']  // fixed from styleUrl
})
export class EmployeeEdit implements OnInit {

  employee: Employee = new Employee();
  id!: number;  // must be number

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = Number(idParam);  // convert string -> number
      this.employeeService.getEmployeeById(this.id).subscribe({
        next: (data) => this.employee = data,
        error: (err) => console.error('Error fetching employee:', err)
      });
    }
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe({
      next: () => {
        alert('Employee updated successfully');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error updating employee:', err);
      }
    });
  }
}
