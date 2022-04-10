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
      new Quotes(0,'Gabby',"In three words I can sum up everything I've learned about life: it goes on.",new Date(2022,4,1),0,0),
      new Quotes(1,'Ryan',"Try to be a rainbow in someone's cloud.",new Date(2021,4,5),5,0),
      new Quotes(2,'Reynard','Work hard and SMART and success will follow you',new Date(2020,4,12),3,0)
    ];

    get sortedQuoty(){
      return this.quote.sort((a , b) =>{
        return<any>new Date(b.completeDate)-<any>new Date(a.completeDate);
      });

    }

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

    upvotes(i:number) {
      this.quote[i].upvotes ++;
    }

    downvotes(i:number) {
      this.quote[i].downvotes  ++;
    }

    firstNum!:number
    lastNum!:number
    counter!:number

    highestUpvote(){
      this.firstNum = 0
      this.lastNum = 0
  
      for(this.counter=0 ; this.counter < this.quote.length; this.counter++) {
        this.lastNum = this.quote[this.counter].upvotes;
        if(this.lastNum > this.firstNum){this.firstNum = this.lastNum}
      }
      return  this.firstNum
    }

 

  constructor() { }

  ngOnInit(): void {
  }

}
