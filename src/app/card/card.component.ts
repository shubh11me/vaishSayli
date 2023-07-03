import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  count=0;
  constructor() { }

@Input() index=new Input();
@Input() name=new Input();
@Input() age=new Input();
@Input() food=new Input();
@Input() hobbies=new Input();

@Output() sendderr=new EventEmitter();

sendMyCOunt(){
  this.sendderr.emit(this.count);
}

  ngOnInit(): void {
    this.count=this.index+5;

  }

}
