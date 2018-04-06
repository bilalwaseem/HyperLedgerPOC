import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PapaParseModule } from 'ngx-papaparse';


import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './main/employees/list-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeesComponent } from './main/employees/add-employees.component';
import { AddCompaniesComponent } from './main/companies/add-companies.component';
import { ListCompaniesComponent } from './main/companies/list-companies.component';
import { AddProjectsComponent } from './main/projects/add-projects.component';
import { ListProjectsComponent } from './main/projects/list-projects.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { FooterComponent } from './shared/layout/footer/footer.component';

const appRoutes: Routes = [
  { path: 'listEmployee', component:ListEmployeesComponent},
  { path: 'addEmployee', component:AddEmployeesComponent},
  { path: 'addCompany', component:AddCompaniesComponent},
  { path: 'listCompany', component:ListCompaniesComponent},
  { path: 'addProject', component:AddProjectsComponent},
  { path: 'listProject', component:ListProjectsComponent},
  { path: '', redirectTo: '/listEmployee',pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    AddEmployeesComponent,
    AddCompaniesComponent,
    ListCompaniesComponent,
    AddProjectsComponent,
    ListProjectsComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PapaParseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
