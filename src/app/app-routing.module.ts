import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkouthomeComponent} from './workouthome/workouthome.component';
import {AddworkoutComponent} from './addworkout/addworkout.component';
import {AddcategoryComponent} from './addcategory/addcategory.component';
import {TrackComponent} from './track/track.component';
import { StartComponent } from './start/start.component';
import { StopComponent } from './stop/stop.component';

const routes:Routes=[
 {path:'' , pathMatch: 'full' ,redirectTo:'/viewall'},
 {path:'viewall', component: WorkouthomeComponent},
 {path:'create',component:AddworkoutComponent},
 {path:'category',component:AddcategoryComponent},
 {path:'track',component:TrackComponent},
 {path :'start',component:StartComponent},
 {path:'end',component:StopComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
