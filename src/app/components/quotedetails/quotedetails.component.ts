import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from 'src/app/models/quotes';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {

  constructor() { }

  @Input () quote! : Quotes;
  @Output () isComplete = new EventEmitter<boolean>();
  deleteQuote(complete:boolean){
    
    this.isComplete.emit(complete)
  }

 
  upvotes (){
    this.quote
  }
  downvotes (){

  }

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrashCan = faTrashCan;


  ngOnInit(): void {
  }

}
