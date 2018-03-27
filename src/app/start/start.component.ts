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
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers:[Workoutcollections,WorkoutcollectionsService,WorkoutactiveService]
})
export class StartComponent implements OnInit {
  workoutActive:Workoutactive
  startForm:FormGroup;
  workout_id:any
  startDate:string
  workouts:any
  workout:any

  constructor(private router:Router ,private activatedRoute:ActivatedRoute,private workoutcollectionsService:WorkoutcollectionsService,private workoutactiveService:WorkoutactiveService,private workoutsessionService:WorkoutsessionService ) {
    this.startDate = new Date().toISOString().slice(0, 16);
       
    this.workoutsessionService.currentworkout_id.subscribe(id =>{
      console.log("id present in start compnet  "+id);
      this.workout_id =id;
      console.log("workout id"+this.workout_id);
      
    })

    this.workoutcollectionsService.getworkoutById(this.workout_id).subscribe(
      data =>{
       
        this.workouts =data
        console.log("workout to show start page"+ JSON.stringify(this.workouts));
        
      }
    )

   }

  ngOnInit() {
  
    this.workoutcollectionsService.getworkoutById(this.workout_id).subscribe(
      data =>{
        console.log("data in start page");
        console.log(data);
        this.workouts =data
        console.log("workout to show start page"+ JSON.stringify(this.workouts));
        
      }
    )

    this.startForm= new FormGroup({
      startTime : new FormControl('',[<any>Validators.required]),
      startDate :new FormControl('',<any>Validators.required)
    }

    )
  }
  start()
  {
    this.workoutActive = this.startForm.value;
    this.workoutActive.workoutId = this.workout_id;
    console.log("Start Page");
    console.log(this.workoutActive);
    this.workoutactiveService.postworkoutActive(this.workoutActive).subscribe(res =>{
      console.log(res); 
    })
    this.router.navigate(['workouts'])

    
  }
  cancel(){
  this.startForm.reset()
  this.router.navigate(['workouts'])
  }

}
