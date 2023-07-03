import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponeteModule } from './shared/componete/componete.module';
import { provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponeteModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
