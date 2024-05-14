import { Injectable } from '@angular/core';
import { CollectionReference, Firestore, addDoc, getDocs, query, collection } from '@angular/fire/firestore';
import { Message } from '../Domain/message';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private firestore : Firestore) { }

  addMessage(message : Message){
    addDoc(collection(this.firestore, 'messages'), Object.assign({}, message))
  }

  getMessage(){
    return getDocs(query(collection(this.firestore, 'messages')))
  }
}
