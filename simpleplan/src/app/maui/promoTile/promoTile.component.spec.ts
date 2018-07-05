import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PromoTileComponent } from './promoTile.component';
import { MauiPromoTileModule } from './promoTile.module';

@Component({
    selector: 'agl-test-component',
    template: `<agl-maui-promo-tile [header]="'Bills straight to your inbox'"
                    [footerLinkText]="'Set up eBilling'"
                    [footerLink]="'/maui#button'"
                    [imagePath]="'svg/icon-promo-ebilling.svg'"
                    [showTile]="true">
                    Receive <b>your</b> energy bills via email and enjoy a little less clutter in your life.
                </agl-maui-promo-tile>
                `,
})
class TestComponent { }

describe('MAUI PromoTileComponent', () => {
    let fixture: ComponentFixture<TestComponent>;
    let de: DebugElement;
    let comp: PromoTileComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                MauiPromoTileModule
            ],
            declarations: [
                TestComponent
            ]
        });
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        de = fixture.debugElement;
        comp = de.children[0].componentInstance;
    });

    it('should create the component', () => {
        expect(fixture).toBeTruthy();
    });

    it('should have a header', () => {
        let nativeElement = de.query(By.css('.promo-tile__copy-header')).nativeElement;
        expect(nativeElement.innerText).toContain('Bills straight to your inbox');
    });

    it('should have a body', () => {
        let nativeElement = de.query(By.css('.promo-tile__copy-body')).nativeElement;
        expect(nativeElement.innerText).toContain('Receive your energy bills via email and enjoy a little less clutter in your life.');
    });

    it('should have a footer', () => {
        let nativeElement = de.query(By.css('.promo-tile__copy-footer')).nativeElement;
        expect(nativeElement.innerText).toContain('Set up eBilling');
    });

    it('should have a image', () => {
        let imageElement = de.query(By.css('.promo-tile__icon-container-image')).nativeElement;
        expect(imageElement).toBeDefined();
    });

    it('should have a link', () => {
        let nativeElement = de.query(By.css('.promo-tile__copy-footer')).nativeElement;
        expect(nativeElement.children[0].innerHTML).toContain('/maui#button');
    });

    it('should not show the tile when showTile = false', () => {

        // ARRANGE
        comp.showTile = false;
        fixture.detectChanges();

        // EXPECT
        let promoTile = de.query(By.css('.promo-tile-wrapper'));
        expect(promoTile).toBeFalsy();
    });

});
