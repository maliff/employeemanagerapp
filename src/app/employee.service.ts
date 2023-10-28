import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService{
    private apiServerUrl = '';

    constructor(private http: HttpClient) {}

    //See All Employee
    public getEmployee(): Observable<Employee[]>{
        return this.http.get<Employee[]>('${this.apiServerUrl}/employee/allemployee')
    }

    //Add Employee
    public addEmployee(employee: Employee): Observable<Employee>{
        return this.http.post<Employee>('${this.apiServerUrl}/employee/add', employee);
    }

    //Update Employee
    public updateEmployee(employee: Employee): Observable<Employee>{
         return this.http.put<Employee>('${this.apiServerUrl}/employee/update', employee);
    }
    
    //Delete Employee
    public deleteEmployee(employeeId: number): Observable<void>{
        return this.http.delete<void>('${this.apiServerUrl}/employee/delete/${employeeId}');
   }
}