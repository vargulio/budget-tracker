import {NgModule} from '@angular/core';
import {TransactionsRoutingModule} from './transaction-routing.module';
import {AddNewTransactionComponent} from './components/add-new-transaction/add-new-transaction.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        TransactionsRoutingModule,
        ReactiveFormsModule],
    declarations: [
        AddNewTransactionComponent
    ],
    exports: [
        AddNewTransactionComponent
    ]
})
export class TransactionsModule {
}

