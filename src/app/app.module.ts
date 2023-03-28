import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FormsModule} from '@angular/forms';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import {DataTablesModule} from 'angular-datatables';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    CreateAccountComponent,
    CreateTransactionComponent,
    AccountDetailsComponent,
    TransactionHistoryComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [AuthGuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
