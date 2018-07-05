import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public showDisabledState: boolean = false;
  public isLoadingPrimarySmall: boolean = false;
  public submitButton() {
    // TODO
  }
}
