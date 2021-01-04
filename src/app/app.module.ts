import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//graficos
import { ChartsModule } from 'ng2-charts';
import { from } from 'rxjs';
import { CountUpModule } from 'ngx-countup';// este es para el efecto de que los numeros se cuenten rapdio




//servicios api
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ChartsModule,
    CountUpModule
  ],
  providers: [
    // ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
