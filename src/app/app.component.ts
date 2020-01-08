import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Input-output-concept';

  public sendtodataparent = "from parent side"

  gatdata(value) {
    console.log(value, 'value');
  }
}
