
import { Routes } from '@angular/router';
import { MasterLayoutComponent } from './layout/master-layout/master-layout';
import { EmployeeList } from './components/employee-list/employee-list';
import { EmployeeAdd } from './components/employee-add/employee-add';
import { EmployeeEdit } from './components/employee-edit/employee-edit';
import { EmployeeDetails } from './components/employee-details/employee-details';
import { EmployeeDelete } from './components/employee-delete/employee-delete';

export const appRoutes: Routes = [
  {
    path: '',
    component: MasterLayoutComponent,
    children: [
      { path: '', component: EmployeeList },
      { path: 'add', component: EmployeeAdd },
      { path: 'edit/:id', component: EmployeeEdit },
      { path: 'details/:id', component: EmployeeDetails },
      { path: 'delete/:id', component: EmployeeDelete}
    ]
  }
];
