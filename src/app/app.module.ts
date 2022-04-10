import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotelistComponent } from './components/quotelist/quotelist.component';
import { QuotedetailsComponent } from './components/quotedetails/quotedetails.component';
import { DateCountPipe } from './pipes/date-count.pipe';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    QuotelistComponent,
    QuotedetailsComponent,
    DateCountPipe,
    FormComponent,
    HighlightDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { 

}
