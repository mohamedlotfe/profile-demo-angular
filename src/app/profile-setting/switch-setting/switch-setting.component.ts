import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-switch-setting',
  templateUrl: './switch-setting.component.html',
  styleUrls: ['./switch-setting.component.css']
})
export class SwitchSettingComponent implements OnInit {
  @Output() reloadImgEvent = new EventEmitter<object>();
  btnLabel: string = "Slide me!";
  imgURL: string = "https://homepages.cae.wisc.edu/~ece533/images/baboon.png";

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }
  btnClicked() {
    console.log('slided');
    this.checked = !this.checked;
    if (this.checked) this.reloadImgEvent.emit({ url: this.imgURL, title: "Button 2 slide", id: 3 });
  }

}
