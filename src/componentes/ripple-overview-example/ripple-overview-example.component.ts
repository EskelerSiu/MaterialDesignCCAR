import {Component} from '@angular/core';
import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

/**
 * @title MatRipple basic usage
 */
@Component({
  selector: 'ripple-overview-example',
  templateUrl: 'ripple-overview-example.component.html',
  styleUrl: 'ripple-overview-example.component.css',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule, MatFormFieldModule, MatInputModule, MatRippleModule],
})
export class RippleOverviewExample {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */