import { Component, OnInit } from '@angular/core';
import {WorkoutcollectionsService} from '../services/workoutcollections.service'
import {Workoutactive} from '../models/workoutactive'
import {Router} from '@angular/router'
import {WorkoutactiveService} from '../services/workoutactive.service'
import {WorkoutsessionService} from '../services/workoutsession.service'
@Component({
  selector: 'app-workouthome',
  templateUrl: './workouthome.component.html',
  styleUrls: ['./workouthome.component.css'],
  providers:[WorkoutcollectionsService,WorkoutactiveService]
})
export class WorkouthomeComponent implements OnInit {
 value:string
 workoutList:any
 workout:Workoutactive;
 workout_id:any
 
  constructor(private workoutCollectionsService:WorkoutcollectionsService,private router:Router,private workoutactiveService:WorkoutactiveService
  ,private workoutsessionService:WorkoutsessionService) { }


  ngOnInit() {
    this.workoutCollectionsService.getworkouts().subscribe(data=> { this.workoutList=data})
    this.workoutsessionService.currentworkout_id.subscribe((id) =>{
      this.workout_id =id;
      
      
      })
     
    
    }
    getworkouts(value){
     
      this.workoutCollectionsService.getworkouts().subscribe(data=> { this.workoutList=data})
    }
   
    start(workout){
     this.workoutsessionService.setWorkoutId(workout.workoutId)
      this.router.navigate([workout.workoutId,'start']);
    }

    end(workout){
      
      this.workoutsessionService.setWorkoutId(workout.workoutId)
      this.router.navigate([workout.workoutId,'end']);
    }
    deleteworkout(workout){
       this.workoutList = this.workoutList.filter(u => u !== workout)
      this.workoutCollectionsService.deleteworkout(workout).subscribe()
    }

 
      editworkout(workout){
        this.workoutsessionService.setWorkoutId(workout.workoutId)
        this.router.navigate([workout.workoutId,'edit']);
      }


}
