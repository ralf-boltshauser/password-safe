import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [],
  imports: [MatDialogModule, MatSnackBarModule, MatTableModule, MatInputModule, MatCardModule, CommonModule, MatToolbarModule, MatButtonModule],
  exports: [MatDialogModule, MatSnackBarModule, MatTableModule, MatInputModule, MatCardModule, MatToolbarModule, MatButtonModule],
})
export class MaterialModule {}
