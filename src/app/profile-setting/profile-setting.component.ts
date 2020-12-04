import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.css']
})
export class ProfileSettingComponent implements OnInit {
  btnTitle: string = "You can use buttons to change image";
  imgUrl: string = "https://material.angular.io/assets/img/examples/shiba2.jpg";
  constructor() { }

  ngOnInit(): void {
  }
  reloadURL({ url, title, id }) {
    this.imgUrl = url;
    this.btnTitle = title;
  }
  
}
