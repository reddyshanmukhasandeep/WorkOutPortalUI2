import { Component, OnInit } from '@angular/core';
import {WorkoutcategoryService} from '../services/workoutcategory.service'
import{Router} from '@angular/router'

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css'],
  providers:[WorkoutcategoryService]
})
export class AddcategoryComponent implements OnInit {
  constructor(private workoutcategoryService:WorkoutcategoryService,private router:Router ) { }
  inputcategory={}
  check:boolean=false;
  categoryList:any;
  categoryForm:any

  ngOnInit() {
     this.workoutcategoryService.getCategories().subscribe(data=> { this.categoryList=data;
      console.log(this.categoryList)
    }) 
  }

    addCategory(category){

      console.log("**Category**"+JSON.stringify(category));
       if(category=='' || category==undefined){
        this.check=true;
        console.log(this.check)
        
      }
       else{
         console.log("Else Block");
         this.check=false
         this.workoutcategoryService.postCategories(category).subscribe(data => {this.categoryList.push(category);this.categoryForm.reset()});
         
         
       }
      
       console.log(this.categoryList);
       

}

 deleteCategory(category){
     this.workoutcategoryService.deleteCategory(category).subscribe(data=>{
      this.workoutcategoryService.getCategories().subscribe(data=> { this.categoryList=data;this.categoryForm.reset();
        console.log(this.categoryList)
      }) 
     })
 }

}