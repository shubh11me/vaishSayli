import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

elinkcon=new FormControl('',[Validators.required,Validators.pattern('((http|https)://)([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]);

formmmmm:FormGroup=new FormGroup({
  ename:new FormControl('',[Validators.required]),
  edate:new FormControl('',[Validators.required]),
  ecat:new FormControl('',[Validators.required]),
  etype:new FormControl('',[Validators.required]),
  elink:this.elinkcon
})

submitFormmm(){
  console.log("cscscscssccss")
  console.log(this.formmmmm)
  console.log(this.formmmmm.value)
}

changetype(){
if (this.formmmmm.value.etype=='offline') {
  console.log("anddder")
 this.elinkcon=new FormControl('');
 this.formmmmm.removeControl('elink');
 this.formmmmm.addControl('elink',this.elinkcon);
}

else{
  console.log("anddder")
 this.elinkcon=new FormControl('',[Validators.required,Validators.pattern('((http|https)://)([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]);
 this.formmmmm.removeControl('elink');
 this.formmmmm.addControl('elink',this.elinkcon);

}
console.log(this.formmmmm.controls['elink'])
}


get formcontrol(){
  return this.formmmmm.controls;
}
}
