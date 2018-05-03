import {Pipe, PipeTransform} from '@angular/core';
import {FormValidationErrorMessages} from '../constants/form-error-messages.constant';

@Pipe({name: 'formatErrors'})
export class FormatErrorsPipe implements PipeTransform {


    public transform(errorsObj: any): string {
        if (errorsObj) {
            const errorKeys = Object.keys(errorsObj);
            return FormValidationErrorMessages[errorKeys[0]] || '';
        }

        return '';
    }
}