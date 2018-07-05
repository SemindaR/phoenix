import { Component, Input } from '@angular/core';
import { LinkTarget } from '../../shared/component/link/link.enum';

@Component({
    selector: 'agl-maui-promo-tile',
    templateUrl: './promoTile.component.html',
    styleUrls: ['./promoTile.component.scss']
})

export class PromoTileComponent {

    @Input() header: string;
    @Input() footerLinkText: string;
    @Input() footerLink: string;
    @Input() imagePath: string;
    @Input() showTile: boolean = false;

    public linkTarget = LinkTarget;

}
