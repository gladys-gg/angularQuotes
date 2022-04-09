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
      new Quotes('gladys','work hard and success and success will follow you',new Date(2022,4,12))
     
    ];

    toggleDetails(index:number){

      this.quote[index].showDescription = !this.quote[index].showDescription;
    }

    deleteQuote(isComplete:boolean, index : number){
      console.log('from child to parent', isComplete)
      if(isComplete){
        let todelete =confirm('Are you sure you want to delete this quote?')
        if(todelete){
        this.quote.splice(index,1)
        }
  
      }
    }
  constructor() { }

  ngOnInit(): void {
  }

}
