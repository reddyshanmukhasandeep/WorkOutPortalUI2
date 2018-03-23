import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddworkoutComponent } from './addworkout/addworkout.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { TrackComponent } from './track/track.component';
import { WorkouthomeComponent } from './workouthome/workouthome.component';
import { HeaderComponent } from './header/header.component';
import { StartComponent } from './start/start.component';
import { StopComponent } from './stop/stop.component';
import {UrlproviderService} from './services/urlprovider.service'
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AddworkoutComponent,
    AddcategoryComponent,
    TrackComponent,
    WorkouthomeComponent,
    HeaderComponent,
    StartComponent,
    StopComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UrlproviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
