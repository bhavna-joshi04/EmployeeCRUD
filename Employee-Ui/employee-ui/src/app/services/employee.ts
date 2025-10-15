import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Employee} from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private apiUrl = 'https://localhost:7165/api/Employees';

  constructor(private http:HttpClient){}

    getEmployees(): Observable<Employee[]>{
      return this.http.get<Employee[]>(this.apiUrl);
    }

    addEmployee(employee: Employee): Observable<Employee>{
      return this.http.post<Employee>(this.apiUrl, employee);
    }

    updateEmployee(id: number, employee: Employee): Observable<void>{
      return this.http.put<void>(`${this.apiUrl}/${id}`, employee)
    }

    deleteEmployee(id:number): Observable<void>{
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    getEmployeeById(id: string|number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
    }
  
}
