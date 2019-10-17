import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class TitleValidators {
    static cannotContainSpecialChar(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(';') >= 0)
            return {
                cannnotContainSpecial: true
            };

        return null;
    }

    static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
        if (control.value === 'Button not working')
            return { shouldBeUnquie: true };
        return null;
    }
}