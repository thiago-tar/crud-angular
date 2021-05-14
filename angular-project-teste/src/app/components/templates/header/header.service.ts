import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerdData = new BehaviorSubject<HeaderData>({
    title:'Inicio',
    icon: 'home',
    routerUrl: ''
  })

  constructor() { }

  get headerData(): HeaderData{
    return this._headerdData.value;
  }
  set headerData(headerData: HeaderData){
    this._headerdData.next(headerData);
  }
}
