import { Component } from "@angular/core";
import { UserDataService, AuthenticationService, HttpService } from "../../index";
import {Router} from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public user: any = null;

  constructor(
    private userDataService: UserDataService,
    private authService: AuthenticationService,
    private httpService: HttpService
  ) {
    /* Here we subscribe to change in the user, so we can update the header acordingly. */
    this.userDataService.userChangeObservable.subscribe(updatedUser => {
      this.user = updatedUser;
    });
  }

  public addTransaction() {
    this.httpService.post('addTransaction',{bahur: 'madafaka'}).toPromise().then(response => {
      console.log(response);
    }).catch(error => {
      console.error(error);
    });
  }

  public logoutUser(): void {
    this.authService.logout();
  }
}