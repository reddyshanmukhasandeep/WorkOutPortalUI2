import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {WorkoutcollectionsService} from '../services/workoutcollections.service'
import {WorkoutcategoryService} from '../services/workoutcategory.service'
import {Workoutcollections} from '../models/workoutcollections'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addworkout',
  templateUrl: './addworkout.component.html',
  styleUrls: ['./addworkout.component.css'],
  providers:[WorkoutcollectionsService,WorkoutcategoryService,Workoutcollections]
  
})
export class AddworkoutComponent implements OnInit {
  workoutForm:FormGroup;
  workout:Workoutcollections;
  categoryList:any;
  workoutList:any
  constructor(private workoutcollections:Workoutcollections,private workoutcategoryService:WorkoutcategoryService,private workoutCollectionsService:WorkoutcollectionsService, private router : Router) { }

  ngOnInit() {
    this.workoutcategoryService.getCategories().subscribe(data=> { this.categoryList=data;
      
    })
    this.workoutCollectionsService.getworkouts().subscribe(data=> { this.workoutList=data;
      
    })
    this.workoutForm = new FormGroup ({
      title: new FormControl('', [<any>Validators.required, Validators.minLength(5)]),
      catergoy_id: new FormControl('', [<any>Validators.required]),
      CBM:new  FormControl('',[<any>Validators.required]),
      note:new FormControl('',[<any>Validators.required,Validators.minLength(5))
     
  })
  
   
}
addWorkout() 
{
  this.workout=this.workoutForm.value;
  this.workoutCollectionsService.postworkouts(this.workout).subscribe(workout =>this.workoutList.push(this.workout));
  this.router.navigate(['viewall']);
}

}
