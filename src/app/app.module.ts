import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//servicios api
import { HttpClientModule } from '@angular/common/http';
// import { ApiService } from './api/api.service';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    // ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
