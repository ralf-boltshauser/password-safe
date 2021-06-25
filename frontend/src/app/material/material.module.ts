import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [MatIconModule, MatDialogModule, MatSnackBarModule, MatTableModule, MatInputModule, MatCardModule, CommonModule, MatToolbarModule, MatButtonModule],
  exports: [MatIconModule, MatDialogModule, MatSnackBarModule, MatTableModule, MatInputModule, MatCardModule, MatToolbarModule, MatButtonModule],
})
export class MaterialModule {}
