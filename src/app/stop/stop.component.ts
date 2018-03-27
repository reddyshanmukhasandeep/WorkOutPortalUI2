import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import {Workoutactive} from '../models/workoutactive'
import {WorkoutcollectionsService} from '../services/workoutcollections.service'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {WorkoutactiveService} from '../services/workoutactive.service'
import {WorkoutsessionService} from '../services/workoutsession.service'
import {Workoutcollections} from '../models/workoutcollections'
import {Router} from '@angular/router'

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css'],
  providers:[Workoutcollections,WorkoutcollectionsService,WorkoutactiveService]
})
export class StopComponent implements OnInit  {
  workoutActive={}
  endForm:FormGroup;
  workout_id:any
 end_date:string
  workouts:any
  finalWorkoutactive={}
  constructor(private workoutactiveService:WorkoutactiveService,private router:Router ,private activatedRoute:ActivatedRoute,private workoutcollectionsService:WorkoutcollectionsService,private workoutsessionService:WorkoutsessionService ) {
    this.end_date = new Date().toISOString().slice(0, 16);
    this.workoutsessionService.currentworkout_id.subscribe(id =>{
     console.log("id present in stop compnet  "+id);
      this.workout_id =id;
      console.log("workout id"+this.workout_id);
      
    })

    this.workoutactiveService.getworkoutActiveById(this.workout_id).subscribe(data => {this.workoutActive= data
    console.log("Startting workoutActive"+JSON.stringify(this.workoutActive));
    
    })
   }

  ngOnInit() {
  
    this.workoutcollectionsService.getworkoutById(this.workout_id).subscribe(
      data =>{
        console.log("data in stop page");
        console.log(data);
        this.workouts =data
        console.log("workout to show stop page"+ JSON.stringify(this.workouts));
        
      }
    )
     

    this.endForm= new FormGroup({
      endTime : new FormControl('',[<any>Validators.required]),
     endDate :new FormControl('',<any>Validators.required)
    }

    )
  }
  end()
  {
    this.finalWorkoutactive["workOutActiveId"] = this.workoutActive.workOutActiveId;
    this.workoutActive = this.endForm.value;
    
    console.log("End Page");
    console.log(this.workoutActive);
    this.workoutactiveService.putworkoutActive(this.workoutActive).subscribe(); 
    this.router.navigate(['workouts'])
    
  }
  cancel(){
  this.endForm.reset()
  this.router.navigate(['workouts'])
  }

}