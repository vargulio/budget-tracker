import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
const routes: Routes = [
  {path: 'home', loadChildren: 'app/modules/home/home.module#HomeModule'},
  {path: 'auth', loadChildren: 'app/modules/authentication/authentication.module#AuthenticationModule'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}