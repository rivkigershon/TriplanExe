import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CityComponent } from './Components/city/city.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDL9HG__m_uXESukwxhCD-71jfJV26C3x0',
      libraries: ["places", "geometry"]
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
