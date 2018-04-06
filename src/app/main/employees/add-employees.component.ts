import { Component, OnInit } from '@angular/core';
import { PapaParseService } from 'ngx-papaparse';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {
  constructor(private papa: PapaParseService) {}

  onFileSelected(event) {

    this.papa.parse(event.target.files[0], {
      step: function (row) {
        console.log("Row:", row.data);
      },
      complete: function () {
        console.log("All done!");
      }
    });
    console.log(event.target.files[0]);

  }
 

  ngOnInit() {
  }

}
