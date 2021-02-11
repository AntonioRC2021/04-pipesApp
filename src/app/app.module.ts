import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Cambiar el locale de la app
import localeEs from '@angular/common/locales/es-MX';
import localeFr from '@angular/common/locales/fr';

import {registerLocaleData} from '@angular/common';
registerLocaleData(localeEs)
registerLocaleData(localeFr)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [{provide:LOCALE_ID, useValue:'es-MX'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
