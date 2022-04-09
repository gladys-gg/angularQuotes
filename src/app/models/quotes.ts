export class Quotes {
    public downvotes!:number
    public upvotes!:number


    showDescription:boolean;

    constructor( public author:string, public description:string){
    
    this.showDescription=false;
    this.upvotes =0;
    this.downvotes =0;
    }
}
