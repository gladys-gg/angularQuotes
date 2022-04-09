import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
 
  upvotes (){
    this.quote
  }
  downvotes (){
    this.quote
  }


  ngOnInit(): void {
  }

}
