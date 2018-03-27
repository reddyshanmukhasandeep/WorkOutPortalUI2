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
  value:string
  ngOnInit() {
     this.workoutcategoryService.getCategories().subscribe(data=> { this.categoryList=data;
      console.log("On page Load List");
      
      console.log(this.categoryList)
    }) 
  }

  getcategory(value){
    console.log("Inside get cat"+value);
    
    this.workoutcategoryService.getCategories().subscribe(data=> { this.categoryList=data;})
  }
    addCategory(categoryname){
     
      console.log("Inside Add Category");
      console.log(categoryname);
      
      
     let inputcategory ={}
     inputcategory["categoryName"] = categoryname

       if(categoryname=='' || categoryname==undefined){
        this.check=true;
        console.log(this.check)
        
      }
       else{
         console.log("Else Block");
        console.log(inputcategory);
        
         this.workoutcategoryService.postCategories(inputcategory).subscribe(data => {this.categoryList.push(inputcategory); this.check=false;this.ngOnInit()}
         
        );
       
       }
      
       console.log(this.categoryList);
       

}

updateCategory(category){
  console.log("Inside Update Category");
  
  console.log(category);
  
    if(category=='' || category==undefined){
     this.check=true;
     console.log(this.check)
     
   }
    else{
      console.log("Else Block");
      console.log(category);
      
      this.workoutcategoryService.updateCategory(category).subscribe(data => { this.check=false});
    
    }
    console.log("After else update block");
    
    console.log(this.categoryList);
    

}
editableInputs(category){

this.editableInput = !this.editableInput
if(!this.editableInput){
    console.log();
    
  this.updateCategory(category)

}


}


 deleteCategory(category){
  
  this.categoryList = this.categoryList.filter(u => u !== category)
  this.workoutcategoryService.deleteCategory(category.categoryId).subscribe()
  

}
}