import { Injectable } from '@angular/core';

@Injectable()
export class UrlproviderService {
   baseUrl:String="http://localhost:9000/api/";
   getCompleteURL(uri:string):string{
      return this.baseUrl+uri; 
  }
  constructor() { }

}