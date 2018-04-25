import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AddNewTransactionComponent } from "./components/add-new-transaction/add-new-transaction.component";

const routes: Routes = [
  {path: 'add', component: AddNewTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule {
}