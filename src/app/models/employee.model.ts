import { Optional } from "@angular/core";

export class Employee {
    employeeName: String;
    jobTitle: String;
    location: String;
    employeeType: String;
    email?: String; //Optional
    status: String;
    startingDate: String;
    leavingDate: String; 
    salary: number;
    bonus: number;
    ni: number;
    costCenter: number;
    department: String ;
    division: String;
    treatment?: String; //optional // default = "EXCLUDED"
    elegibilityPercentage?: number; //optional
  }