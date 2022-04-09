import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OutgoingMessage } from 'http';
import { Quotes } from 'src/app/models/quotes';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {

  constructor() { }

  @Input () quote! : Quotes;
  @Output () isComplete = new EventEmitter<boolean>()
  completeQuote(complete:boolean){
    
    this.isComplete.emit(complete)
  }
 

  upvotes=0;
  downvotes=0;


  ngOnInit(): void {
  }

}
