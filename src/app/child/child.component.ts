import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() public parentData;
  @Output() public childData: EventEmitter<String> = new EventEmitter();

  public childdata;


  constructor() { }

  ngOnInit() {
    console.log(this.parentData)
  }
  datasend(event) {
    this.childdata = event.target.value;
    this.childData.emit(this.childdata);
  }
}
