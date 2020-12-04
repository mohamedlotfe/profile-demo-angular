import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-setting',
  templateUrl: './button-setting.component.html',
  styleUrls: ['./button-setting.component.css']
})
export class ButtonSettingComponent implements OnInit {
  @Output() reloadImgEvent = new EventEmitter<object>();
  btnLabel: string = "Click Me!";
  imgURL: string = "https://homepages.cae.wisc.edu/~ece533/images/airplane.png";

  constructor() { }

  ngOnInit(): void {
  }
 
  btnClicked() {
    this.reloadImgEvent.emit({ url: this.imgURL, title: "Button 1 Clicked", id: 1 });
  }

}
