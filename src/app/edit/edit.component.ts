import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {WorkoutcollectionsService} from '../services/workoutcollections.service'
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[WorkoutcollectionsService]
})
export class EditComponent implements OnInit {
  id:any
  workout:any
  workoutForm:FormGroup
  workoutList:any
  constructor(private router:Router,private activateRoute:ActivatedRoute,private workoutCollectionsService:WorkoutcollectionsService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
   }
  )

   this.workoutCollectionsService.getworkoutById(this.id).subscribe(
     workout => {console.log(workout); this.workout = workout; console.log("After assiging");
     console.log(this.workout);
 
     }
   )
   this.workoutCollectionsService.getworkouts().subscribe(data=> { this.workoutList=data;
    
  })

   this.workoutForm = new FormGroup ({
    title: new FormControl('', [<any>Validators.required, Validators.minLength(5)]),
    catergoy_id: new FormControl('', [<any>Validators.required]),
    CBM:new  FormControl('',[<any>Validators.required]),
    note:new FormControl('',[<any>Validators.required,Validators.minLength(5)])
   
})
  }
  updateWorkout() 
  {
    this.workout=this.workoutForm.value;
    this.workoutCollectionsService.postworkouts(this.workout).subscribe(workout =>this.workoutList.push(this.workout));
    this.router.navigate(['workouts']);
  }
}
