import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringListService {

  strings : string[]=[]


  constructor() { }
    add(strings : string){
      this.strings.push(strings)

    }
    clear(){
      this.strings = []

    }

    get(){
      return this.strings
    }

  }

