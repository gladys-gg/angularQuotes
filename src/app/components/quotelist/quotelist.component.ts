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
      new Quotes(0,'gladys','work hard and success and success will follow you',new Date(2022,4,12),0,0),
      new Quotes(1,'gladys','work hard and success and success will follow you',new Date(2022,4,12),0,0),
      new Quotes(2,'gladys','work hard and success and success will follow you',new Date(2022,4,12),0,0),
      new Quotes(3,'gladys','work hard and success and success will follow you',new Date(2022,4,12),0,0)
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

    addQuote(quote:any){
      let arraysize = this.quote.length;
      quote.id =arraysize+1;
      quote.completeDate =new Date(quote.completeDate)
      this.quote.push(quote)

    }

    displayInfo(index:any){
      this.quote[index].showDescription =!this.quote[index].showDescription
    }

  constructor() { }

  ngOnInit(): void {
  }

}
