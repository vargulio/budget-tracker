import {NgModule} from '@angular/core';
import {TransactionsRoutingModule} from './transaction-routing.module';
import {AddNewTransactionComponent} from './components/add-new-transaction/add-new-transaction.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        TransactionsRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        AddNewTransactionComponent
    ],
    exports: [
        AddNewTransactionComponent
    ]
})
export class TransactionsModule {
}

