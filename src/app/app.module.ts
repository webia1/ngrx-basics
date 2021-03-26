import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// EBIA

import { StoreModule } from '@ngrx/store';
import { reducers } from './dynamic/store';

@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserModule,
      AppRoutingModule,
      StoreModule.forRoot(reducers),
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
