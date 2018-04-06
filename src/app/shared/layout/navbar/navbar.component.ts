import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

//   loadScripts() {
//     document.getElementById("script1").remove();
//     var script1 = document.createElement("script");
//     script1.setAttribute("id", "script1");
//     script1.setAttribute("src", "../../../../assets/plugins/dropzone/dropzone.js");
//     document.head.appendChild(script1);

//     document.getElementById("script2").remove();
//     var script2 = document.createElement("script");
//     script2.setAttribute("id", "script2");
//     script2.setAttribute("src", "../../../../assets/plugins/dropzone/dropzone-call.js");
//     document.head.appendChild(script2);
// }
  ngOnInit() {
  }

}
