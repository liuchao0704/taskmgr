import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
   MatToolbarModule, 
   MatIconModule,
   MatButtonModule,
   MatInputModule,
   MatCardModule,
   MatListModule,
   MatSliderModule,
   MatSlideToggleModule,
   MatGridListModule,
   MatDialogModule,
   MatAutocompleteModule,
   MatMenuModule,
   MatCheckboxModule,
   MatTooltipModule,
   MatDatepickerModule,
   MatRadioModule,
   MatNativeDateModule,
   MatSelectModule,
    } from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  declarations: [ConfirmDialogComponent],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
