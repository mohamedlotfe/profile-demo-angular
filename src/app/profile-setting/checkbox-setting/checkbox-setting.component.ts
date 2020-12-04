import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox-setting',
  templateUrl: './checkbox-setting.component.html',
  styleUrls: ['./checkbox-setting.component.css']
})
export class CheckboxSettingComponent implements OnInit {
  @Output() reloadImgEvent = new EventEmitter<object>();
  checked = false;
  btnLabel: string = "Check Me!";
  imgURL: string = "https://homepages.cae.wisc.edu/~ece533/images/boat.png";

  constructor() { }

  ngOnInit(): void {
  }
  btnClicked() {
    console.log('Checked');
    this.checked = !this.checked;
    if (this.checked) this.reloadImgEvent.emit({ url: this.imgURL, title: "Button 3 Checked", id: 2 });
  }

}
