import {Pipe, PipeTransform} from '@angular/core';
import {FormValidationErrorMessages} from '../constants/form-error-messages.constant';

@Pipe({name: 'formatErrors'})
export class FormatErrorsPipe implements PipeTransform {


    public transform(errorsObj: any): string {
        if (errorsObj) {
            const errorKeys = Object.keys(errorsObj);
            if (errorKeys[0] === 'maxlength' || errorKeys[0] === 'minlength' ) {
                return FormValidationErrorMessages[errorKeys[0]] + errorsObj[errorKeys[0]]['requiredLength'];
            }
            if (errorKeys[0] === 'isIn') {
                return FormValidationErrorMessages[errorKeys[0]] + errorsObj['options'].join(',');
            }
            return FormValidationErrorMessages[errorKeys[0]] || '';

        }

        return '';
    }
}