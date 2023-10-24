import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { ListDisplayComponent } from './list-display/list-display.component';
import { ComboDisplayComponent } from './combo-display/combo-display.component';
import { UserformDisplayComponent } from './userform-display/userform-display.component';
import { TextcomboComponent } from './textcombo/textcombo.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent,
    ListDisplayComponent,
    ComboDisplayComponent,
    UserformDisplayComponent,
    TextcomboComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
