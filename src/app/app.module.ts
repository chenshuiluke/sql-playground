import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { providers } from './providers';
import { QueryHistoryListComponent } from './query-history-list/query-history-list.component';
@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    ResultTableComponent,
    QueryHistoryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
