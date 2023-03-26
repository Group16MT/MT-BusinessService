import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path: 'employees',canActivate: [AuthGuardService], component: EmployeeListComponent},
  {path: 'create-employee',canActivate: [AuthGuardService], component: CreateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-employee/:id',canActivate: [AuthGuardService], component: UpdateEmployeeComponent},
  {path: 'employee-details/:id',canActivate: [AuthGuardService], component: EmployeeDetailsComponent},
  {path: 'transaction-history',canActivate: [AuthGuardService], component: TransactionHistoryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
