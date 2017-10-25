import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { providers } from './providers';
@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
