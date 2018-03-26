import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import {Observable} from 'rxjs/Rx';


@Injectable()
export class WorkoutsessionService {
private common_id = new BehaviorSubject<any>(1);
 currentworkout_id:Observable<any>

 private editbutton = new BehaviorSubject<any>(true)
   currenteditbutton:Observable<any>

  constructor() { 
       this.currentworkout_id=this.common_id.asObservable();
       this.currenteditbutton = this.editbutton.asObservable();
   }
  
  setWorkoutId(workout_id){
    
      this.common_id.next(workout_id)
     }
  setEditbutton(){
     this.editbutton.next(false)
  }
 
}
