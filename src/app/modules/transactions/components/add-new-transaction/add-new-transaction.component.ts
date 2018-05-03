import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormBuilderService, HttpService} from '../../../shared';


@Component({
    selector: 'add-new-transaction',
    templateUrl: './add-new-transaction.component.html',
    styleUrls: ['./add-new-transaction.component.scss']
})
export class AddNewTransactionComponent {

    public transactionForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private httpService: HttpService,
                private formBuilderService: FormBuilderService) {
        this.formBuilderService.buildForm('validationSchema').then(form => {
            this.transactionForm = form;
            console.log(this.transactionForm);
        });
        this.createForm();
        // this.httpService.get('validationSchema').toPromise().then(response => {
        //     console.log(response);
        // });
    }

    private createForm() {
        this.transactionForm = this.formBuilder.group({
            userId: ['abfbaifbauibfuia'],
            amount: ['12'],
            description: 'afsafas',
            repetetive: true,
            repeatInterval: 22,
            category: '7',
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