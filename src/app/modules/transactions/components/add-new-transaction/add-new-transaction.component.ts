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
    public transactionCategories: Array<any>;
    public repeatIntervals: Array<any>;

    constructor(
        private formBuilder: FormBuilder,
        private httpService: HttpService,
        private formBuilderService: FormBuilderService,
        private userDataService: UserDataService) {

        this.formBuilderService.buildForm('validationSchema').then(form => {
            this.transactionForm = form;
            this.transactionForm.get('userId').setValue(this.userDataService.getUser().id);
            this.transactionForm.get('repetetive').setValue(false);
            this.httpService.get('getTransactionCategories').toPromise().then(response => {
                this.transactionCategories = response;
                this.transactionForm.get('category').setValue(this.transactionCategories[0].id);
            });
            this.httpService.get('getRepeatIntervals').toPromise().then(response => {
                this.repeatIntervals = response;
                this.transactionForm.get('repeatInterval').setValue(this.repeatIntervals[0].id);
            });
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