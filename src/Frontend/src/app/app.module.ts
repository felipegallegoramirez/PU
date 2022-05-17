import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PreviewComponent } from './preview/preview.component';
import { PartsComponent } from './parts/parts.component';
import { InicioDeSesionComponent } from './inicio-de-sesion/inicio-de-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioDeSesionComponent,
    HomeComponent,
    SearchComponent,
    PreviewComponent,
    PartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
