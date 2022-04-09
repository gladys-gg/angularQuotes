import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from 'src/app/models/quotes';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  quoty = new Quotes('','',new Date() )
  @Output () add = new EventEmitter<Quotes> ();

  addNewQuote (){
    this.add.emit(this.quoty);
    this.quoty = new Quotes('','',new Date());

  }

  constructor() { }

  ngOnInit(): void {
  }

}
