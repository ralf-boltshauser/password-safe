import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [],
  imports: [MatTableModule, MatInputModule, MatCardModule, CommonModule, MatToolbarModule, MatButtonModule],
  exports: [MatTableModule, MatInputModule, MatCardModule, MatToolbarModule, MatButtonModule],
})
export class MaterialModule {}
