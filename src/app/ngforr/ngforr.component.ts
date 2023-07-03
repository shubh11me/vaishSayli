import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforr',
  templateUrl: './ngforr.component.html',
  styleUrls: ['./ngforr.component.css'],
})
export class NgforrComponent implements OnInit {
  myarr = ['SHubha', 'Vrush', 'ssayali', 'Vaishnavi'];
  co=null;
  vrush = {
    name: 'vrush',
    age: 16,
    gender: 'f',
  };


  recv(e:any){
this.co=e;

  }

  // name=vrush
  // age=16
  // gender=f

  // name=shubh
  // age=21
  // gender=m
  box:any = [
    {
        name: 'vrush',
        age: 16,
        gender: 'f',
        food:['Gulabjaam',"Rabdi"],
        hobbies: [
            {
                hobbi_name: 'Music',
                priority: "high",
            },
            {
                hobbi_name: 'Dance',
                priority: "Mid"
            },
            {
                hobbi_name: 'Cook',
                priority: "Low"
            },
        ]
    },
    {
        name: 'Shubham',
        age: 20,
        gender: 'm',
        food:['Gulabjaam',"Rabdi"],

        hobbies: [
            {
                hobbi_name: 'Crick',
                priority: "high"
            },
            {
                hobbi_name: 'Cook',
                priority: "Mid"
            },
            {
                hobbi_name: 'Eat',
                priority: "Low"
            },
        ]

    },
    {
        name: 'Sayali',
        age: 21,
        gender: 'f',
        food:['Gulabjaam',"Rabdi"],

        hobbies: [
            {
                hobbi_name: 'Coding',
                priority: "high"
            },
            {
                hobbi_name: 'traveling',
                priority: "Mid"
            },
            {
                hobbi_name: 'Study',
                priority: "Low"
            },
        ]
    }
]


  constructor() {
    // console.log(this.myarr);
    console.log(this.box);

    // console.log(this.vrush.age);

  }

  ngOnInit(): void {}
}
