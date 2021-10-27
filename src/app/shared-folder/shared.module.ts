import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgBusyModule } from 'ng-busy';
import { FormControlComponent } from './form-control/form-control.component';
import { InquiryComponent } from './inquiry/inquiry-component';

@NgModule({
  declarations: [
    FormControlComponent,
    InquiryComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgBusyModule
  ],
  exports: [
    FormControlComponent,
    InquiryComponent,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgBusyModule
  ],
})
export class SharedModule { }
