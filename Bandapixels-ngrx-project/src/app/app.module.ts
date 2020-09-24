import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { nubersReducer } from './store/app.reducer';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [	
    AppComponent,
      ContainerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({numbers: nubersReducer} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
