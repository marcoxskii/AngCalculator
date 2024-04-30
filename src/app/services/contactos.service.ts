import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

message : string[]=[]


  constructor() { }
    add(message : string){
      this.message.push(message)

    }
    clear(){
      this.message = []

    }

    get(){
      return this.message
    }

  }

