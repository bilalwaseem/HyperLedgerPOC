import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-companies',
  templateUrl: './add-companies.component.html',
  styleUrls: ['./add-companies.component.css']
})
export class AddCompaniesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveCompany(compForm: NgForm): void {
    console.log(compForm.value);
  }

}
