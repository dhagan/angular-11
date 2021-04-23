import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-select',
  templateUrl: './demo-select.component.html',
  styleUrls: ['./demo-select.component.css']
})
export class DemoSelectComponent implements OnInit {

  name = 'Angular 11';
  person = [{
    name:"douglas",
    rnNo:21
  },
  {
    name:"hagan",
    rnNo:23
  },
  {
    name:"fresh",
    rnNo:24
  }];
  selected:any =23 ;

  ngOnInit(){
   // this.selected = undefined;
  }

  ngDoCheck(){

  }
valueChange(event){
  console.log("selected value",event.target.value ,
  'value of selected',this.selected);
  //this.selected = event.target.value;
}
save(){
  console.log('value i got ',this.selected);
}
clear(){
  this.selected = undefined;  
}

}
