import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DropmenuModule } from '../dropmenu/dropmenu.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatToolbarModule, DropmenuModule],
  exports: [HeaderComponent],
})
export class HeaderModule { }
