import { Location } from '@angular/common';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { By, DomSanitizer } from '@angular/platform-browser';
import { MauiSecondaryNavigationComponent, DisplayPageNumber } from './secondaryNavigation.component';

@Component({
    selector: 'agl-maui-secondary-navigation-test-with-clicked',
    template: `<agl-maui-secondary-navigation
                 [display]="true"
                 [displayBackButton]="true"
                 text="Back Test"
                 (clicked)="backButtonClick()">
              </agl-maui-secondary-navigation>`,
})

class MauiSecondaryNavigationClickedEventTestComponent {
    public backButtonClickCalled: boolean = false;

    public backButtonClick(): void {
        this.backButtonClickCalled = true;
    }
}

@Component({
    selector: 'agl-maui-secondary-navigation-test-without-clicked',
    template: `<agl-maui-secondary-navigation
                 [display]="true"
                 [displayBackButton]="true"
                 text="Back Test">
              </agl-maui-secondary-navigation>`,
})

class MauiSecondaryNavigationWithoutClickedEventTestComponent {
    public backButtonClickCalled: boolean = false;
}

describe('MAUI Secondary Navigation', () => {
    let comp: MauiSecondaryNavigationComponent;
    let fixture: ComponentFixture<MauiSecondaryNavigationComponent>;
    let de: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MauiSecondaryNavigationComponent
            ],
            providers: [
                MatIconRegistry,
                { provide: Location },
            ]
        });

        fixture = TestBed.createComponent(MauiSecondaryNavigationComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        comp.display = true;
        comp.pageNumber = 1;
        comp.pageTotal = 8;
        let iconRegistry: MatIconRegistry = fixture.debugElement.injector.get(MatIconRegistry);
        let sanitizer: DomSanitizer = fixture.debugElement.injector.get(DomSanitizer);
        iconRegistry.addSvgIcon('icon-chevron-desktop', sanitizer.bypassSecurityTrustResourceUrl('svg/chevron-desktop.svg'));
        iconRegistry.addSvgIcon('icon-chevron-mobile', sanitizer.bypassSecurityTrustResourceUrl('svg/chevron-mobile.svg'));
    });

    describe('Display tests', () => {

        it('should hide back button when displayBackButton is false', () => {
            // arrange
            comp.displayBackButton = false;

            // act
            fixture.detectChanges();

            // asert
            let backOption = de.query(By.css('.maui-navigation__back-option'));
            expect(backOption).toBeNull();
        });

        it('should show back button when displayBackButton is true', () => {
            // arrange
            comp.displayBackButton = true;

            // act
            fixture.detectChanges();

            // asert
            let backOption = de.query(By.css('.maui-navigation__back-option'));
            expect(backOption.nativeElement).toBeDefined();
        });

        it('should add relevant class to page indicator when displayPageNumber is `OnDesktop`', () => {
            // arrange
            comp.displayPageNumber = DisplayPageNumber.OnDesktop;

            // act
            fixture.detectChanges();

            // asert
            const page = de.query(By.css('.maui-navigation__page')).nativeElement;
            expect(page.classList.contains('visible-xs')).toBe(false);
            expect(page.classList.contains('hidden-xs')).toBe(true);
        });

        it('should add relevant class to page indicator when displayPageNumber is `OnMobile`', () => {
            // arrange
            comp.displayPageNumber = DisplayPageNumber.OnMobile;

            // act
            fixture.detectChanges();

            // asert
            const page = de.query(By.css('.maui-navigation__page')).nativeElement;
            expect(page.classList.contains('visible-xs')).toBe(true);
            expect(page.classList.contains('hidden-xs')).toBe(false);
        });

        it('should not have page indicator when pageNumber is not provided', () => {
            // arrange
            comp.pageNumber = undefined;

            // act
            fixture.detectChanges();

            // asert
            const page = de.query(By.css('.maui-navigation__page'));
            expect(page).toBeNull();
        });

        it('should not have page indicator when pageTotal is not provided', () => {
            // arrange
            comp.pageTotal = undefined;

            // act
            fixture.detectChanges();

            // asert
            const page = de.query(By.css('.maui-navigation__page'));
            expect(page).toBeNull();
        });

        it('should hide secondary navigation when display is false', () => {
            // arrange
            comp.display = false;

            // act
            fixture.detectChanges();

            // asert
            let backOption = de.query(By.css('.maui-navigation'));
            expect(backOption).toBeNull();
        });

        it('should show secondary navigation when display is true', () => {
            // arrange
            comp.display = true;

            // act
            fixture.detectChanges();

            // asert
            let backOption = de.query(By.css('.maui-navigation'));
            expect(backOption.nativeElement).toBeDefined();
        });
    });

    describe('Scroll tests', () => {

        let scrollEvent;
        beforeEach(() => {
            const DOCUMENT_HEIGHT = '1000px';
            const DOCUMENT_WIDTH = '1000px';
            scrollEvent = document.createEvent('CustomEvent');
            scrollEvent.initCustomEvent('scroll', false, false, null);
            document.body.style.minHeight = DOCUMENT_HEIGHT;
            document.body.style.minWidth = DOCUMENT_WIDTH;
        });

        it('should hide secondary navigation when user scroll down', () => {
            // arrange
            const NEW_Y_POSITION = 300;
            comp.hideNavigation = false;

            // act
            scrollTo(0, NEW_Y_POSITION);
            dispatchEvent(scrollEvent);

            // assert
            expect(comp.hideNavigation).toBe(true);
        });

        it('should show secondary navigation when user scroll up', () => {
            // arrange
            const NEW_Y_POSITION = 100;
            const PREVIOUS_Y_POSITION = 500;
            comp.hideNavigation = true;
            scrollTo(0, PREVIOUS_Y_POSITION);
            dispatchEvent(scrollEvent);

            // act
            scrollTo(0, NEW_Y_POSITION);
            dispatchEvent(scrollEvent);

            // assert
            expect(comp.hideNavigation).toBe(false);
        });
    });
});

describe('MAUI Secondary Navigation component with clicked function provided', () => {
    let component: MauiSecondaryNavigationComponent;
    let fixture: ComponentFixture<MauiSecondaryNavigationClickedEventTestComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MauiSecondaryNavigationComponent,
                MauiSecondaryNavigationClickedEventTestComponent
            ],
            providers: [
                { provide: Location },
            ]
        });

        fixture = TestBed.createComponent(MauiSecondaryNavigationClickedEventTestComponent);
        component = fixture.debugElement.children[0].componentInstance;
    });

    it('should display and displayBackButton properties true', () => {
        fixture.detectChanges();

        expect(component.display).toBe(true);
        expect(component.displayBackButton).toBe(true);
    });

    it('should check that an event is raised when click on back button', () => {
        fixture.detectChanges();
        const element = fixture.nativeElement.querySelector('.maui-navigation__back-option');

        element.click();

        expect(fixture.componentInstance.backButtonClickCalled).toBe(true);
    });
});

describe('MAUI Secondary Navigation component without clicked function provided', () => {
    let component: MauiSecondaryNavigationComponent;
    let fixture: ComponentFixture<MauiSecondaryNavigationWithoutClickedEventTestComponent>;
    let de: DebugElement;
    const locationStub = {
        back(): void { /* stub */ }
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MauiSecondaryNavigationComponent,
                MauiSecondaryNavigationWithoutClickedEventTestComponent
            ],
            providers: [
                { provide: Location, useValue: locationStub },
            ]
        });

        fixture = TestBed.createComponent(MauiSecondaryNavigationWithoutClickedEventTestComponent);
        de = fixture.debugElement;
        component = fixture.debugElement.children[0].componentInstance;
    });

    it('should display and displayBackButton properties true', () => {
        fixture.detectChanges();

        expect(component.display).toBe(true);
        expect(component.displayBackButton).toBe(true);
    });

    it('should check that location back method called when click on back button', () => {
        let location: Location = de.injector.get(Location);
        const locationSpy = spyOn(location, 'back');
        fixture.detectChanges();
        const element = fixture.nativeElement.querySelector('.maui-navigation__back-option');

        element.click();

        expect(locationSpy).toHaveBeenCalled();
    });
});
