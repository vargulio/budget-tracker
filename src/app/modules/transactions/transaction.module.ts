import { NgModule } from "@angular/core";
import { TransactionsRoutingModule } from "./transaction-routing.module";
import { AddNewTransactionComponent } from "./components/add-new-transaction/add-new-transaction.component";

@NgModule({
  imports: [TransactionsRoutingModule],
  declarations: [
    AddNewTransactionComponent
  ],
  exports: [
    AddNewTransactionComponent
  ]
})
export class TransactionsModule {
}

