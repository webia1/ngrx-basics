import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// EBIA

import { StoreModule } from '@ngrx/store';
import { actionReducerMap } from './dynamic/store/actionReducerMap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(actionReducerMap),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
