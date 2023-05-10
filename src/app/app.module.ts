import { MatTabHeader } from '@angular/material/tabs';
import { ModeloDesktopModule } from './pagina-inicial/modelo-desktop/modelo-desktop.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabGroupComponent } from './componentes-auxiliares/tabs/tab-group/tab-group.component';
import { TabItemComponent } from './componentes-auxiliares/tabs/tab-item/tab-item.component';
import { TabLabelComponent } from './componentes-auxiliares/tabs/tab-item/tab-label/tab-label.component';
import { TabContentComponent } from './componentes-auxiliares/tabs/tab-item/tab-content/tab-content.component';


@NgModule({
  declarations: [
    AppComponent,
    TabGroupComponent,
    TabItemComponent,
    TabLabelComponent,
    TabContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModeloDesktopModule
  ],
  exports: [ModeloDesktopModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
