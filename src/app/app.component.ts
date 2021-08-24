import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ignorSymbols } from './castomOperator/pipe.operator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'IgnorSymbols';
  specialInput = new FormControl('');
  value!: string;

  constructor() {
    this.specialInput.valueChanges
      .pipe(ignorSymbols('🤠'))
      .subscribe((text) => {
        console.log(text);
        this.value = text;
      });
  }

  onSubmit() {
    console.log(this.value);
  }
}
