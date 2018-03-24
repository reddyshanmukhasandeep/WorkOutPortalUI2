import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {UrlproviderService} from './urlprovider.service'
@Injectable()
export class WorkoutcollectionsService {
   private workoutUrl:string
  constructor(private http:HttpClient,private urlproviderService:UrlproviderService) {
     this.workoutUrl = urlproviderService.getCompleteURL("workout");
   }
   getworkouts(){
      
       return this.http.get(this.workoutUrl);
  }
  postworkouts(workout){
     return this.http.post(this.workoutUrl,workout);
  }
  deleteworkout(workout){
    return this.http.delete(this.workoutUrl)
  }
}