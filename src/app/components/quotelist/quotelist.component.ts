import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/models/quotes';



@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {

    quote: Quotes [] =[
      new Quotes('gladys','work hard and success and success will follow you')
     
    ];

    toggleDetails(index:number){

      this.quote[index].showDescription = !this.quote[index].showDescription;
    }

    completeQuote(isComplete:boolean, index : number){
      console.log('from child to parent', isComplete)
      if(isComplete){
        this.quote.splice(index,1)
  
      }
    }
  constructor() { }

  ngOnInit(): void {
  }

}
