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
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import {WorkoutsessionService} from './services/workoutsession.service';
import { EditComponent } from './edit/edit.component';
import { FilterCategoryPipe } from './filter-category.pipe'

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
    FilterPipe,
    EditComponent,
    FilterCategoryPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UrlproviderService,WorkoutsessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
