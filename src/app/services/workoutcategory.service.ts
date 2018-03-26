import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http'
import {UrlproviderService} from './urlprovider.service'
import 'rxjs/Rx';
@Injectable()
export class WorkoutcategoryService {
   private categoryUrl:string
  constructor(private http:HttpClient,private urlproviderService:UrlproviderService) {
     this.categoryUrl = urlproviderService.getCompleteURL("category");
   }
   getCategories(){
      
       return this.http.get(this.categoryUrl);
  }
  postCategories(category){
     return this.http.post(this.categoryUrl,category);
  }
  deleteCategory(category){
    return this.http.delete(this.categoryUrl)
  }
  updateCategory(category){
    return this.http.put(this.categoryUrl,category);
  }

  
}
