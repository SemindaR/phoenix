import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PromoTileComponent } from './promoTile.component';
import { LinkModule } from '../../shared/component/link';

@NgModule({
    declarations: [
        PromoTileComponent
    ],
    imports: [
        CommonModule,
        LinkModule
    ],
    exports: [
        PromoTileComponent
    ]
})

export class MauiPromoTileModule { }
