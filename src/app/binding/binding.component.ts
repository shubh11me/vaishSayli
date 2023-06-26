import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public name:string="ssssssss";
myCLass="op";
  givver(){
    console.log("Heyyy")
  }

  varrrr="scsc"


  constructor() {
    this.givver();
    console.log("Construction talks"+ this.name);
  }

  ngOnInit(): void {
    console.log("Oninit talks");
  }

}
