import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormBuilderService, HttpService, UserDataService} from '../../../shared';


@Component({
    selector: 'add-new-transaction',
    templateUrl: './add-new-transaction.component.html',
    styleUrls: ['./add-new-transaction.component.scss']
})
export class AddNewTransactionComponent {

    public transactionForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private httpService: HttpService,
                private formBuilderService: FormBuilderService,
                private userDataService: UserDataService) {
        this.formBuilderService.buildForm('validationSchema').then(form => {
            this.transactionForm = form;
            console.log("BAAAAAM: ",new Date().getTime(),this.userDataService.getUser());
            this.transactionForm.get('userId').setValue(this.userDataService.getUser().id);
            console.log(this.transactionForm);
        });
    }

    public printForm() {
        console.log(this.transactionForm);
        this.httpService.post('addTransaction', this.transactionForm.value).toPromise().then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }
}