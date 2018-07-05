import { Component, Input } from '@angular/core';

@Component({
  selector: 'agl-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() public heading: string;
  @Input() public imagePath: string;

}
