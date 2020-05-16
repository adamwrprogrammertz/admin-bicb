import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const materialModules = [
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatFormFieldModule,
  MatGridListModule,
  MatListModule,
  MatProgressBarModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports:[...materialModules]
})
export class MaterialModule { }
