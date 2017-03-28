import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class AppComponent {
	private menuOpen: boolean;

	toggleMenu() {
		!this.menuOpen? this.menuOpen = true: this.menuOpen = false;
	}

	onClick($event) {
		if($event.target.localName == 'nav' || $event.target.localName == 'a') {
			this.menuOpen = false;
		} else {
			return;
		}
	} 
}
