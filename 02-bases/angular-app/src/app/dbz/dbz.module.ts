import { MainPageComponent } from './pages/main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  exports: [MainPageComponent],
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
