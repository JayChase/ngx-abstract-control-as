import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';

  testForm = new FormGroup({
    details: new FormGroup({
      name: new FormControl(null, [Validators.required]),
    }),
    addresses: new FormArray([
      new FormGroup({
        city: new FormControl(null, [Validators.required]),
      }),
    ]),
  });
}
