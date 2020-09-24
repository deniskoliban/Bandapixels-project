import { NumRendererComponent } from './container/num-renderer/num-renderer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { ContainerComponent } from './container/container.component';
import { EffectsModule } from '@ngrx/effects';
import { NameEffects } from './store/app.effects';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NumRendererComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({numbers: appReducer} ),
    EffectsModule.forRoot([NameEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
