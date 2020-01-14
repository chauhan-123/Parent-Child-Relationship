import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @ViewChild('viewComponent', { static: true }) viewComponent: ElementRef;
  public parentData;
  data: any;
  Data: any;

  constructor() { }

  ngOnInit() {
    console.log('testing for checkin for merging..')
  }

  changeMainContent() {
    this.viewComponent.nativeElement.setAttribute("style", "color:red");
  }

  sendData(event) {
    this.Data = event.target.value;
  }
  getdata(value) {
    this.data = value;

  }
}
