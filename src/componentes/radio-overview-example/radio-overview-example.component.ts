import {Component} from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';

/**
 * @title Basic radios
 */
@Component({
  selector: 'radio-overview-example',
  templateUrl: 'radio-overview-example.component.html',
  styleUrl: 'radio-overview-example.component.css',
  standalone: true,
  imports: [MatRadioModule],
})
export class RadioOverviewExample {}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */