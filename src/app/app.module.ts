import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { contadorComponent } from './contador/contador/contador.component';
import { heroesModule } from './heroes/heroe.module';
import { contadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { AgregarComponent } from './dbz/agregar/agregar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, heroesModule, contadorModule,DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
