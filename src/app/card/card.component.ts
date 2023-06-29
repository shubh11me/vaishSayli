import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
@Input() name=new Input();
@Input() age=new Input();
@Input() food=new Input();
@Input() hobbies=new Input();
  ngOnInit(): void {
  }

}
