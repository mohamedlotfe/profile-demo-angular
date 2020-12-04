import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { ButtonSettingComponent } from './profile-setting/button-setting/button-setting.component';
import { SwitchSettingComponent } from './profile-setting/switch-setting/switch-setting.component';
import { CheckboxSettingComponent } from './profile-setting/checkbox-setting/checkbox-setting.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ProfileSettingComponent,
    ButtonSettingComponent,
    SwitchSettingComponent,
    CheckboxSettingComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,MatButtonModule,
    MatSlideToggleModule,MatCheckboxModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
