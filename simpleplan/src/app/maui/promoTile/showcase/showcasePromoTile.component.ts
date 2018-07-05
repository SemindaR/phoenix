import { Component } from '@angular/core';

@Component({
    selector: 'agl-maui-showcase-promo-tile',
    templateUrl: './showcasePromoTile.component.html',
    styleUrls: ['./showcasePromoTile.component.scss'],
})

export class ShowcasePromoTileComponent {

    public codeUsage: string = `
            <agl-maui-promo-tile
                [header]="'Bills straight to your inbox'"
                [body]="'Receive your energy bills via email and enjoy a little less clutter in your life.'"
                [footerLinkText]="'Set up eBilling'"
                [footerLink]="'/maui#button'"
                [imagePath]="'svg/icon-promo-ebilling.svg'"
                [showTile]="true">
            </agl-maui-promo-tile>
        `;
}
