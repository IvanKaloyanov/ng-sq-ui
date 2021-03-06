import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SqUiComponent } from './sq-ui/sq-ui.component';
import { SharedModule } from '../shared/shared.module';
import { NgSqUiModule } from '@sq-ui/ng-sq-ui';
import { routing } from './sq-ui-routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSqUiModule,
    SharedModule,
    routing
  ],
  declarations: [SqUiComponent],
  exports: [
    SqUiComponent
  ]
})
export class SqUiModule { }
