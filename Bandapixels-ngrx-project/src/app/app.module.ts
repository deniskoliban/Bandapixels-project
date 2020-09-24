import { NumRendererComponent } from './container/num-renderer/num-renderer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { numbersCountReducer } from './store/numbers.reducer';
import { ContainerComponent } from './container/container.component';
import { EffectsModule } from '@ngrx/effects';
import { NumbersEffects } from './store/numbers.effects';
import { appReducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NumRendererComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([NumbersEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
