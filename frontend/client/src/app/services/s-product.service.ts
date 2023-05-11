import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SProductService {


  //tyo access html tags from here u use document.getId
  message:string[]=[];
    constructor(private http:HttpClient) { }
  
  
  
   
  
    //  getAllProducts(){
    //   return this.http.get(SOAP_API_URL);
  
    //  }
  
    
  
     
  
     clear(){
      this.message=[]
     }
  
   

  
}
