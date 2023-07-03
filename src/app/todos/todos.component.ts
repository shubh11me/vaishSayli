import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

todo:any[]=[];

deleteTodod(ind:number){
this.todo.splice(ind,1);
}

  addTodo(){
    let obj={
      msg:this.msg,
      dsc:this.desc
    }
    // console.log(obj);
    this.todo.push(obj);
    this.msg='';
    this.desc='';

  }
  msg:string='';
  desc:string='';

}
