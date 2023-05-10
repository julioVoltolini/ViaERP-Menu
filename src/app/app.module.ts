import { ModeloDesktopModule } from './pagina-inicial/modelo-desktop/modelo-desktop.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { TabGroupComponent } from './componentes-auxiliares/tabs/tab-group/tab-group.component';
import { TabItemComponent } from './componentes-auxiliares/tabs/tab-item/tab-item.component';
import { TabLabelComponent } from './componentes-auxiliares/tabs/tab-item/tab-label/tab-label.component';
import { TabContentComponent } from './componentes-auxiliares/tabs/tab-item/tab-content/tab-content.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    TabGroupComponent,
    TabItemComponent,
    TabLabelComponent,
    TabContentComponent,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ModeloDesktopModule],
})
export class AppModule {}
