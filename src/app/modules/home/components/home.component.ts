import {Component} from '@angular/core';
import {HttpService, UserDataService} from '../../shared';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(private httpService: HttpService, private userDataService: UserDataService) {
        console.log('Home: ', this.userDataService.getUser());
    }

}
