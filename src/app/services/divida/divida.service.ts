import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../api-crud/api.service';
import { Observable, map } from 'rxjs';
import { SERVER_URI } from 'src/enviroments/server';

@Injectable({
  providedIn: 'root'
})
export class DividaService extends ApiService<any> {
  constructor(public override injector: Injector){
    super(injector, "dividas")
  }

  imprimirRelatorio(id: number, data:any):Observable<any>{
    return this.http.post(`${SERVER_URI}dividas/relatorio/${id}`, data).pipe(map((data: any) => {
      return data;
    }));
  }
}
