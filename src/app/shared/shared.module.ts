import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
   MatToolbarModule, 
   MatIconModule,
   MatButtonModule,
   MatInputModule,
   MatCardModule,
    } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: []
})
export class SharedModule { }
