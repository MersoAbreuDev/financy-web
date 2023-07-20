import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../api-crud/api.service';
import { Observable, map } from 'rxjs';
import { SERVER_URI } from 'src/enviroments/server';

@Injectable({
  providedIn: 'root'
})
export class ParcelaService extends ApiService<any>{
  
  constructor(public override injector: Injector){
    super(injector, "parcelas")
  }


  buscarParcelaPorIdDivida(id: number): Observable<any> {
    return this.http.get(`${SERVER_URI}dividas/${id}/parcelas`).pipe(map((data: any) => {
      return data;
    }));
  }

  pagarParcelaPorid(id: number): Observable<any> {
    return this.http.get(`${SERVER_URI}parcelas/${id}`).pipe(map((data: any) => {
      return data;
    }));
  }


}
