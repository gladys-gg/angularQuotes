export class Quotes {
    


    showDescription:boolean;

    constructor( public id:number,public author:string, public quote:string, public completeDate:Date, public upvotes:number,public downvotes:number){
    
    this.showDescription=false;
    this.upvotes =0;
    this.downvotes =0;
    this.completeDate=new Date;
    }
}
