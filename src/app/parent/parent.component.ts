import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

greet(name:string){
  console.log("Hello "+name)
}

myarr = ['SHubha', 'Vrush', 'ssayali', 'Vaishnavi'];


  ngOnInit(): void {
    this.greet("SHubh")
    this.greet("Vaish")
    this.greet("Vrush")
  }

}
