import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeloDesktopComponent } from './modelo-desktop.component';
import { BarraSuperiorDesktopComponent } from './barra-superior-desktop/barra-superior-desktop.component';
import { MenuComponent } from './menu/menu.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [ModeloDesktopComponent, BarraSuperiorDesktopComponent, MenuComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    ModeloDesktopComponent
  ]
})
export class ModeloDesktopModule { }
