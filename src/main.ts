import '@angular/localize/init';
import {importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {VERSION as CDK_VERSION} from '@angular/cdk';
import {VERSION as MAT_VERSION, MatNativeDateModule} from '@angular/material/core';

import {AutocompleteAutoActiveFirstOptionExample} from './componentes/autocomplete-auto-active-first-option-example/autocomplete-auto-active-first-option-example';
import {BadgeOverviewExample} from './componentes/badge-overview-example/badge-overview-example';
import {BottomSheetOverviewExample} from './componentes/bottom-sheet-overview-example/bottom-sheet-overview-example';
import {ButtonOverviewExample} from './componentes/button-overview-example/button-overview-example';
import {ButtonToggleAppearanceExample} from './componentes/button-toggle-appearance-example/button-toggle-appearance-example';
import {CardActionsExample} from './componentes/card-actions-example/card-actions-example';
import {CheckboxConfigurableExample} from './componentes/checkbox-configurable-example/checkbox-configurable-example';
import {ChipsAutocompleteExample} from './componentes/chips-autocomplete-example/chips-autocomplete-example';
import {DateRangePickerComparisonExample} from './componentes/date-range-picker-comparison-example/date-range-picker-comparison-example';
import {DialogAnimationsExample} from './componentes/dialog-animations-example/dialog-animations-example';
import {DividerOverviewExample} from './componentes/divider-overview-example/divider-overview-example';
import {ExpansionExpandCollapseAllExample} from './componentes/expansion-expand-collapse-all-example/expansion-expand-collapse-all-example';
import {FormFieldAppearanceExample} from './componentes/form-field-appearance-example/form-field-appearance-example';
import {GridListDynamicExample} from './componentes/grid-list-dynamic-example/grid-list-dynamic-example.component';
import {IconOverviewExample} from './componentes/icon-overview-example/icon-overview-example.component';
import {InputOverviewExample} from './componentes/input-overview-example/input-overview-example.component';
import {ListSectionsExample} from './componentes/list-sections-example/list-sections-example.component';
import {MenuNestedExample} from './componentes/menu-nested-example/menu-nested-example.component';
import {PaginatorConfigurableExample} from './componentes/paginator-configurable-example/paginator-configurable-example.component';
import {ProgressBarConfigurableExample} from './componentes/progress-bar-configurable-example/progress-bar-configurable-example.component';
import {ProgressSpinnerConfigurableExample} from './componentes/progress-spinner-configurable-example/progress-spinner-configurable-example.component';
import {RadioOverviewExample} from './componentes/radio-overview-example/radio-overview-example.component';
import {RippleOverviewExample} from './componentes/ripple-overview-example/ripple-overview-example.component';
import {SelectOverviewExample} from './componentes/select-overview-example/select-overview-example';
import {SidenavAutosizeExample} from './componentes/sidenav-autosize-example/sidenav-autosize-example';
import {SlideToggleOverviewExample} from './componentes/slide-toggle-overview-example/slide-toggle-overview-example';
import {SliderOverviewExample} from './componentes/slider-overview-example/slider-overview-example';
import {SnackBarOverviewExample} from './componentes/snack-bar-overview-example/snack-bar-overview-example';
import {SortOverviewExample} from './componentes/sort-overview-example/sort-overview-example';
import {StepperOverviewExample} from './componentes/stepper-overview-example/stepper-overview-example';
import {TableBasicExample} from './componentes/table-basic-example/table-basic-example';
import {TabGroupBasicExample} from './componentes/tab-group-basic-example/tab-group-basic-example';
import {ToolbarOverviewExample} from './componentes/toolbar-overview-example/toolbar-overview-example';
import {TooltipOverviewExample} from './componentes/tooltip-overview-example/tooltip-overview-example';
import {TreeFlatOverviewExample} from './componentes/tree-flat-overview-example/tree-flat-overview-example';


/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

const examples = [
  AutocompleteAutoActiveFirstOptionExample,
  BadgeOverviewExample,
  BottomSheetOverviewExample,
  ButtonOverviewExample,
  ButtonToggleAppearanceExample,
  CardActionsExample,
  CheckboxConfigurableExample,
  ChipsAutocompleteExample,
  DateRangePickerComparisonExample,
  DialogAnimationsExample,
  DividerOverviewExample,
  ExpansionExpandCollapseAllExample,
  FormFieldAppearanceExample,
  GridListDynamicExample,
  IconOverviewExample,
  InputOverviewExample,
  ListSectionsExample,
  MenuNestedExample,
  PaginatorConfigurableExample,
  ProgressBarConfigurableExample,
  ProgressSpinnerConfigurableExample,
  RadioOverviewExample,
  RippleOverviewExample,
  SelectOverviewExample,
  SidenavAutosizeExample,
  SlideToggleOverviewExample,
  SliderOverviewExample,
  SnackBarOverviewExample,
  SortOverviewExample,
  StepperOverviewExample,
  TableBasicExample,
  TabGroupBasicExample,
  ToolbarOverviewExample,
  TooltipOverviewExample,
  TreeFlatOverviewExample
];

const providers = [
  provideAnimations(),
  provideHttpClient(),
  importProvidersFrom(MatNativeDateModule)
];

examples.forEach(example => {
  bootstrapApplication(example, { providers }).catch(err => console.error(err));
});