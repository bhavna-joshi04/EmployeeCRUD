import { Component, OnInit, signal } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit {
   employees = signal<Employee[]>([]);

   constructor(private employeeService:EmployeeService){
   }
     ngOnInit(): void {
    this.employeeService.getEmployees().subscribe({
      next: data => this.employees.set(data),
      error: err => console.error(err)
    });
  }
}

