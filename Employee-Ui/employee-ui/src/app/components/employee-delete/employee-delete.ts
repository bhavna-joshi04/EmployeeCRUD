import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-delete',
  imports: [CommonModule],
  templateUrl: './employee-delete.html',
  styleUrl: './employee-delete.css'
})
export class EmployeeDelete implements OnInit {

  employee: Employee | undefined;
  id!: number;

  constructor(
    private route: ActivatedRoute, 
    public router: Router, 
    private employeeService: EmployeeService
    )
  { }
  ngOnInit(): void {

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = Number(idParam);  // convert string -> number
      this.employeeService.getEmployeeById(this.id).subscribe({
        next: (data) => (this.employee = data),
        error: (err) => console.error('Error fetching employee:', err)
      });
    }
  }
  confirmDeleteEmployee(): void {
    this.employeeService.deleteEmployee(this.id).subscribe({
      next: () => {
        alert("Employee deleted successfully");
        this.router.navigate(['/']);
      },
      error: (err) => console.error('Error deleting employee', err)
      
    });
  }
  cancel(): void {
    this.router.navigate(['/']);
  }

}
