import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SERVER_URI } from 'src/enviroments/server';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<T> {
 
  protected http!: HttpClient;
  constructor(
    public injector: Injector,
    private nomeController: string,
    ) { 
    this.http = this.injector.get(HttpClient);
  }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '/*'
    })
  }
  
  salvar(object:any): Observable<T> {
    return this.http.post(`${SERVER_URI}`+this.nomeController,object)
      .pipe(map((data: any) => {
        return data;
      })
    )
  }

  buscarTodos(data: any): Observable<T[]> {
    return this.http.get(`${SERVER_URI}${this.nomeController}`,data).pipe(map((data: any) => {
      return data;
    }));
  }

  buscarPorId(id: number): Observable<T> {
    return this.http.get(`${SERVER_URI}`+this.nomeController+`/${id}`).pipe(map((data: any) => {
      return data;
    }));
  }

  deletar(id: number): Observable<T> {
    return this.http.delete(`${SERVER_URI}`+this.nomeController+`/${id}`)
    .pipe(map((data: any) => {
      return data;
    }))
  }

  atualizar(id:number, object:any):Observable<T>{
    return this.http.put(`${SERVER_URI}`+this.nomeController+`/${id}`, object).pipe(map((data: any)=>{
      return data;
    }))
  }

  filtro( object:any, options:any ){
    return this.http.post(`${SERVER_URI}`+this.nomeController, object, options).pipe(map((data: any) => {
      return data;
    }));
  }
}
