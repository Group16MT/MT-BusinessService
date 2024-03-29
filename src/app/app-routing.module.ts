import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountListComponent } from './account-list/account-list.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path: 'accounts',canActivate: [AuthGuardService], component: AccountListComponent},
  {path: 'create-account',canActivate: [AuthGuardService], component: CreateAccountComponent},
  {path: '', redirectTo: 'accounts', pathMatch: 'full'},
  {path: 'create-transaction/:id',canActivate: [AuthGuardService], component: CreateTransactionComponent},
  {path: 'account-details/:id',canActivate: [AuthGuardService], component: AccountDetailsComponent},
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
