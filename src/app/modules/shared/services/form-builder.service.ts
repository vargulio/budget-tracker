import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {AbstractControl, FormBuilder, FormControl, ValidationErrors, Validators} from '@angular/forms';
import {ValidatorFn} from '@angular/forms/src/directives/validators';

@Injectable()
export class FormBuilderService {

    constructor(private httpService: HttpService,
                private formBuilder: FormBuilder) {
    }

    private getValidationSchema(validationSchemaUrl: string) {
        return this.httpService.get(validationSchemaUrl).toPromise();
    }

    public async buildForm(validationSchemaUrl: string) {
        const validationSchema = await this.getValidationSchema(validationSchemaUrl);
        const form = this.formBuilder.group({});
        for (const formControlName in validationSchema) {
            const formControl = new FormControl();
            formControl.setValidators(this.parseControlValidationSchema(validationSchema[formControlName]));
            form.addControl(formControlName, formControl);
        }
        return form;
    }

    /**
     * Parses the validation Schema and returns an array with the
     * required validators in the context of the reactive forms
     * @param validationSchema
     */
    private parseControlValidationSchema(validationSchema): ValidatorFn[] {
        const validators: ValidatorFn[] = [];
        if (validationSchema['exists']) {
            validators.push(Validators.required);
        }
        if (validationSchema['isLength'] && validationSchema['isLength']['options']) {
            if (validationSchema['isLength']['options']['max'] || validationSchema['isLength']['options']['max'] === 0) {
                validators.push(Validators.maxLength(validationSchema['isLength']['options']['max']));
            }

            if (validationSchema['isLength']['options']['min'] || validationSchema['isLength']['options']['min'] === 0) {
                validators.push(Validators.minLength(validationSchema['isLength']['options']['min']));
            }
        }

        // enum validation
        if (validationSchema['isIn']) {
            const enumOptions = validationSchema['isIn']['options'][0];
            validators.push((control: AbstractControl) => {
                return (enumOptions.indexOf(parseInt(control.value)) === -1) ? {
                    isIn: false,
                    options: validationSchema['isIn']['options'][0]
                } : null;
            });
        }

        if (validationSchema['isInt']) {
            validators.push((control: AbstractControl) => {
                return isNaN(control.value) ? {isNumeric: false} : null;
            });
        }

        if (validationSchema['isInt'] && validationSchema['isInt']['options']) {
            if (validationSchema['isInt']['options']['max'] || validationSchema['isInt']['options']['max'] === 0) {
                validators.push(Validators.max(validationSchema['isLength']['options']['max']));
            }

            if (validationSchema['isInt']['options']['min'] || validationSchema['isInt']['options']['min'] === 0) {
                validators.push(Validators.min(validationSchema['isLength']['options']['min']));
            }
        }


        return validators;
    }
}