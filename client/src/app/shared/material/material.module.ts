import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
  ],
})
export class MaterialModule { }
