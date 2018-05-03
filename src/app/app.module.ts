import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomeModule} from './modules/home/home.module';
import {RouterModule} from '@angular/router';
import {SharedModule} from './modules/shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {TransactionsModule} from './modules/transactions/transaction.module';
import {UserDataService} from './modules/shared';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        CommonModule,
        HomeModule,
        SharedModule,
        AppRoutingModule,
        RouterModule,
        TransactionsModule
    ],
    // UserDataService instantiated here so it will be Singleton
    providers: [UserDataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
