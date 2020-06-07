import { Injectable } from '@angular/core';
import {Observable, of, throwError, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private subject = new Subject<any>();

  constructor() { }

  sendSearch(search: string){
    this.subject.next({ text: search });
  }

  getSearch(): Observable<any> {
    return this.subject.asObservable();
  }

  clearSearch(){
    this.subject.next();
  }
}
