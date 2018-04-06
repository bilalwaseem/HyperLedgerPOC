import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [{
      
      employeeName: "Andrea Rampling",
      jobTitle: "Head of IS",
      location: "London",
      employeeType: "Employee",
      email: "", //optional
      status: "Employed",
      startingDate: "9/1/2007",
      leavingDate: "11/29/2013", 
      salary: 120000,
      bonus: 0,
      ni: 1440,
      costCenter: 410,
      department: "",
      division: "",
      treatment: "", // default = "EXCLUDED" optional
      elegibilityPercentage: null //optional
  },
  {
      employeeName: "Andrea Rampling",
      jobTitle: "Head of IS",
      location: "London",
      employeeType: "Employee",
      email: "", //optional
      status: "Employed",
      startingDate: "9/1/2007",
      leavingDate: "11/29/2013", 
      salary: 120000,
      bonus: 0,
      ni: 1440,
      costCenter: 410,
      department: "",
      division: "",
      treatment: "", // default = "EXCLUDED" optional
      elegibilityPercentage: null //optional
  }];
    
  constructor() { }

  ngOnInit() {
  }

}
