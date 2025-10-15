import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee.model';


@Component({
  selector: 'app-employee-details',
  imports: [CommonModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails implements OnInit {

  employee: Employee = new Employee;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void{
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: (data) => this.employee = data,
      error:(err) => console.error('Error fethchng employee:', err)

    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
