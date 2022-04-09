export class Quotes {
    


    showDescription:boolean;

    constructor( public id:number,public author:string, public description:string, public completeDate:Date, public upvotes:number,public downvotes:number){
    
    this.showDescription=false;
    
    }
}
