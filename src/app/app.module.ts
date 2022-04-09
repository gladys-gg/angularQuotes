import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotelistComponent } from './components/quotelist/quotelist.component';
import { QuotedetailsComponent } from './components/quotedetails/quotedetails.component';
import { DateCountPipe } from './pipes/date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotelistComponent,
    QuotedetailsComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
