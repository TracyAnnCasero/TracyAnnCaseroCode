import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './form-control/form-control.component';
import { InquiryComponent } from './inquiry/inquiry-component';

@NgModule({
  declarations: [
    FormControlComponent,
    InquiryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormControlComponent,
    InquiryComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
