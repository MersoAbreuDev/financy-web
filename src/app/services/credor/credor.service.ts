import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../api-crud/api.service';

@Injectable({
  providedIn: 'root'
})
export class CredorService extends ApiService<any> {

  
  constructor(public override injector: Injector){
    super(injector, "credores")
  }
}
