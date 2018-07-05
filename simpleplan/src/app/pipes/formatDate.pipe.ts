import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'aglFormatDate'
})
// This was created as the angular date pipe was giving a period after the 3 letter month ie MMM  =  Jun.
export class FormatDatePipe implements PipeTransform {
    public transform(value: string | Date, formatting?: string): string {
        return moment(value).format(formatting || 'ddd DD MMM YYYY');
    }
}
@Pipe({
    name: 'aglFormatBasicDate'
})
// Custom date pipe to tranform date, i.e. 1 Feb 2018
export class FormatBasicDatePipe implements PipeTransform {
    public transform(value: string | Date): string {
        return moment(value).format('D MMM YYYY');
    }
}
