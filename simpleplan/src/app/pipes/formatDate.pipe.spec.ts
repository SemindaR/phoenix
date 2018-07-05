import { FormatBasicDatePipe, FormatDatePipe } from './formatDate.pipe';

describe(`FormatBasicDatePipe`, () => {

    let formatBasicDatePipe = new FormatBasicDatePipe();

    it(`transforms '2018-05-24' to '24 May 2018'`, () => {
        expect(formatBasicDatePipe.transform(new Date('2018-05-24'))).toBe(`24 May 2018`);
    });

    it(`transforms '2016-01-01' to '1 Jan 2016'`, () => {
        expect(formatBasicDatePipe.transform(new Date('2016-01-01'))).toBe(`1 Jan 2016`);
    });

    it(`transforms 'ThisShouldFail' to 'Invalid date'`, () => {
        expect(formatBasicDatePipe.transform('ThisShouldFail')).toBe('Invalid date');
    });

});

describe('FormatDatePipe', () => {

    it ('default formatting', () => {
        // Arrange
        const datePipe = new FormatDatePipe();

        // Act
        const formatted = datePipe.transform('2018-12-31');

        // Assert
        expect(formatted).toBe('Mon 31 Dec 2018');
    });

    it ('with tailored formatting', () => {
        // Arrange
        const datePipe = new FormatDatePipe();

        // Act
        const formatted = datePipe.transform('2018-12-31', 'DD MMM YYYY');

        // Assert
        expect(formatted).toBe('31 Dec 2018');
    });

});
