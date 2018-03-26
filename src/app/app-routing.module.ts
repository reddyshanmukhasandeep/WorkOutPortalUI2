import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkouthomeComponent} from './workouthome/workouthome.component';
import {AddworkoutComponent} from './addworkout/addworkout.component';
import {AddcategoryComponent} from './addcategory/addcategory.component';
import {TrackComponent} from './track/track.component';
import { StartComponent } from './start/start.component';
import { StopComponent } from './stop/stop.component';
import {EditComponent} from './edit/edit.component';

const routes:Routes=[
 {path:'' , pathMatch: 'full' ,redirectTo:'/workouts'},
 {path:'workouts', component: WorkouthomeComponent},
 {path:'create',component:AddworkoutComponent},
 {path:'category',component:AddcategoryComponent},
 {path:'track',component:TrackComponent},
 {path :':id/start',component:StartComponent},
 {path:':id/end',component:StopComponent},
 {path:':id/edit',component:EditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
