import {Component} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Nested menu
 */
@Component({
  selector: 'menu-nested-example',
  templateUrl: 'menu-nested-example.component.html',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
})
export class MenuNestedExample {}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */