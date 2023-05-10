import { ModeloDesktopComponent } from './modelo-desktop.component';
import { BarraSuperiorDesktopComponent } from './barra-superior-desktop/barra-superior-desktop.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ModeloDesktopComponent, BarraSuperiorDesktopComponent, MenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ModeloDesktopComponent
  ]
})
export class ModeloDesktopModule { }
