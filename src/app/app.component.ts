import { Component } from '@angular/core';

//component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//this is where all the logic resides
export class AppComponent {
  title = 'app';
}
