import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {WorkoutcollectionsService} from '../services/workoutcollections.service'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {WorkoutcategoryService} from '../services/workoutcategory.service'
import {WorkoutsessionService} from '../services/workoutsession.service'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[WorkoutcollectionsService,WorkoutcategoryService]
})
export class EditComponent implements OnInit {
  id:any
  workout:any;
  workoutForm:FormGroup
  workoutList:any
  categoryList:any
  workout_id:number
  cbm:number
  constructor(private workoutcollectionsService:WorkoutcollectionsService, private workoutsessionService:WorkoutsessionService,private workoutcategoryService:WorkoutcategoryService,private router:Router,private activateRoute:ActivatedRoute,private workoutCollectionsService:WorkoutcollectionsService) { 
    this.workoutcategoryService.getCategories().subscribe(data=> { 
      console.log("WorkoutCategory Being Called");
      console.log(data);
      
      this.categoryList=data;
     console.log(this.categoryList);
     this.workoutsessionService.currentworkout_id.subscribe(id =>{
      console.log("id present in Edit compnet  "+id);
      this.workout_id =id;
      console.log("workout id"+this.workout_id);
      this.workoutcollectionsService.getworkoutById(this.workout_id).subscribe(
        data =>{
          this.workout=data    
        
        }
      )
    })
      })
 

  
    
  }
  

  ngOnInit() {
 
   this.workoutForm = new FormGroup ({
    title: new FormControl('', [<any>Validators.required, Validators.minLength(5)]),
    categoryId: new FormControl('', [<any>Validators.required]),
    cbm:new  FormControl('',[<any>Validators.required]),
    note:new FormControl('',[<any>Validators.required,Validators.minLength(5)])
   
})
  }
  updateWorkout() 
  {
    this.workout=this.workoutForm.value;
    this.workout.workoutId = this.workout_id;
    console.log("finalised Updated Post workOut Object");
    console.log(this.workout);
    
    
    this.workoutCollectionsService.putworkouts(this.workout).subscribe();
    this.router.navigate(['workouts']);
  }
}
