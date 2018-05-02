import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpService} from '../../../shared';


@Component({
    selector: 'add-new-transaction',
    templateUrl: './add-new-transaction.component.html',
    styleUrls: ['./add-new-transaction.component.scss']
})
export class AddNewTransactionComponent {

    public transactionForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private httpService: HttpService) {
        this.createForm();
        this.httpService.get('validationSchema').toPromise().then(response => {
            console.log(response);
        });
    }

    private createForm() {
        this.transactionForm = this.formBuilder.group({
            amount: '',
            description: '',
            repetitive: false,
            repeatDate: '',
            category: '',
            creationDate: ''
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