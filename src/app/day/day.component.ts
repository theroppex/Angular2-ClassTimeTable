import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Class} from '../class'
import {ClassComponent} from '../class'

export class Day{
  name:string;
  classes:Class[];
  constructor(_name:string){
    this.name = _name;
    this.classes = [];
  }

  addClass(name:string):void{
    if(!name) return;
    this.classes.push(new Class(name));
  }

  removeClass(toBeRemoved:Class){
    if(!toBeRemoved) return;
    var index = this.classes.indexOf(toBeRemoved);
    if(index > -1){
      this.classes.splice(index, 1);
    }
  }
}


@Component({
  moduleId: module.id,
  selector: 'app-day',
  templateUrl: 'day.component.html',
  styleUrls: ['day.component.css', '../main-style.css'],
  inputs:['day'],
  directives:[ClassComponent]
})
export class DayComponent implements OnInit {
  day:Day;
  constructor() {

  }

  @Output() daySelected = new EventEmitter();

  selectDay():void{
    this.daySelected.emit(this.day);
  }

  addClass(name:string):boolean{
    this.day.addClass(name);
    return false;
  }

  removeClassFromDay(toBeRemoved:Class):boolean{
    this.day.removeClass(toBeRemoved);
    return false;
  }

  ngOnInit() {
  }

}
