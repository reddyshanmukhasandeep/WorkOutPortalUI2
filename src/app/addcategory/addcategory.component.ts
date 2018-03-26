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

  check:boolean=false;
  editableInput:boolean=false;
  categoryList:any;
  categoryForm:any

  ngOnInit() {
     this.workoutcategoryService.getCategories().subscribe(data=> { this.categoryList=data;
      console.log(this.categoryList)
    }) 
  }

    addCategory(categoryname){
     
      
     let inputcategory ={}
     inputcategory["categoryname"] = categoryname

       if(categoryname=='' || categoryname==undefined){
        this.check=true;
        console.log(this.check)
        
      }
       else{
         console.log("Else Block");
         this.workoutcategoryService.postCategories(inputcategory).subscribe(data => {this.categoryList.push(inputcategory); this.check=false});
       
       }
      
       console.log(this.categoryList);
       

}

updateCategory(categoryname){
  
  let inputcategory ={}
  inputcategory["categoryname"] = categoryname

    if(categoryname=='' || categoryname==undefined){
     this.check=true;
     console.log(this.check)
     
   }
    else{
      console.log("Else Block");
      this.workoutcategoryService.updateCategory(inputcategory).subscribe(data => {this.categoryList.push(inputcategory); this.check=false});
    
    }
   
    console.log(this.categoryList);
    

}
editableInputs(category){

this.editableInput = !this.editableInput
 this.updateCategory(category)
}


 deleteCategory1(category){
     this.workoutcategoryService.deleteCategory(category).subscribe(data=>{
      this.workoutcategoryService.getCategories().subscribe(data=> { this.categoryList.splice(category,1)
        console.log(this.categoryList)
      }) 
     })
 }

 deleteCategory(category){
   this.categoryList.splice(category,1)
     console.log(this.categoryList)
   
  
}

}