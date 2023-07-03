import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todocard',
  templateUrl: './todocard.component.html',
  styleUrls: ['./todocard.component.css']
})
export class TodocardComponent implements OnInit {

  constructor() { }
@Input() msg=new Input();
@Input() dsc=new Input();
@Input() ind=new Input();


@Output() delSend=new EventEmitter();
  ngOnInit(): void {
  }

  delete(){
    this.delSend.emit(this.ind)
  }

}
