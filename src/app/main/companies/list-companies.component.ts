import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent implements OnInit {

  companies: Company[] = [{
      
    companyName: "String",
    companyNumber: "String",
    description: "hello"
  },
  {
    companyName: "Andrea Rampling",
    companyNumber: "Head of IS",
    description: "London",
  }];

  constructor() { }

  ngOnInit() {
  }

}
