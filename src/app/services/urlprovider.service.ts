import { Injectable } from '@angular/core';

@Injectable()
export class UrlproviderService {
   baseUrl:String="http://localhost:3000/";
   getCompleteURL(uri:string):string{
      return this.baseUrl+uri; 
  }
  constructor() { }

}