import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public parentData;
  data: any;
  Data: any;

  constructor() { }

  ngOnInit() {

  }

  sendData(event) {
    this.Data = event.target.value;
  }
  getdata(value) {
    this.data = value;

  }
}
