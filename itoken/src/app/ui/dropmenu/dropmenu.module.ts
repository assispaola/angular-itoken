import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropmenuComponent } from './dropmenu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [DropmenuComponent],
  imports: [CommonModule, MatToolbarModule, MatMenuModule],
  exports: [DropmenuComponent],
})
export class DropmenuModule { }
