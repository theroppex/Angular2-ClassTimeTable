import {Component, OnInit, Output, EventEmitter} from '@angular/core';


export class Class{
  name:string;
  static colors = ['yellow', 'blue', 'orange', 'red', 'purple'];
  color: string;

  constructor(_name:string){
    this.name = _name;
    this.color = Class.colors[Math.floor(Math.random()*Class.colors.length)];
  }
}

@Component({
  moduleId: module.id,
  selector: 'app-class',
  templateUrl: 'class.component.html',
  styleUrls: ['class.component.css'],
  inputs:['myClass'],
})
export class ClassComponent implements OnInit {
  myClass:Class;
  constructor() {

  }

  ngOnInit() {
  }

  @Output() removeClass = new EventEmitter();

  removeMe():void{
    this.removeClass.emit(this.myClass);
  }
}
