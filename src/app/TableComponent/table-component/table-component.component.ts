import { Component, OnInit } from '@angular/core';
import {DayComponent} from '../../day'
import {Day} from '../../day'

@Component({
  moduleId: module.id,
  selector: 'time-table',
  templateUrl: 'table-component.component.html',
  styleUrls: ['table-component.component.css'],
  directives: [DayComponent]
})
export class TableComponentComponent implements OnInit {
  days:Day[];
  selectedDay:Day;

  constructor() {
      this.days = [];
      this.days.push(new Day('Monday'));
      this.days.push(new Day('Tuesday'));
      this.days.push(new Day('Wednesday'));
      this.days.push(new Day('Thursday'));
      this.days.push(new Day('Friday'));
      this.days.push(new Day('Saturday'));
      this.selectedDay = this.days[0];
  }

  ngOnInit() {
  }

  setSelectedDay(_day:Day):void{
      this.selectedDay = _day;
      console.log(`selected ${_day.name}`);
  }

  addNewClass(input:HTMLInputElement):void{
      this.selectedDay.addClass(input.value);
      input.value = '';
  }
}
