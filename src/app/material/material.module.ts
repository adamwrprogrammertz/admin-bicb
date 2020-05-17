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
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatTreeModule} from '@angular/material/tree';

const materialModules = [

  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatTreeModule,
  MatButtonModule,
  MatChipsModule,
  MatFormFieldModule,
  MatGridListModule,
  MatListModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatTabsModule,
  MatDividerModule,
  MatTableModule,
  MatDatepickerModule

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
