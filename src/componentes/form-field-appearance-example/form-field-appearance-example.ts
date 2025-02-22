import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

/** @title Form field appearance variants */
@Component({
  selector: 'form-field-appearance-example',
  templateUrl: 'form-field-appearance-example.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldAppearanceExample {}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */