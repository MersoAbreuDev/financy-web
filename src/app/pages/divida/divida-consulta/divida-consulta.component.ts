import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IDivida } from 'src/app/interfaces/divida';
import { DividaService } from 'src/app/services/divida/divida.service';

@Component({
  selector: 'app-divida-consulta',
  templateUrl: './divida-consulta.component.html',
  styleUrls: ['./divida-consulta.component.scss']
})
export class DividaConsultaComponent {
  dividas:any = [];
  dividaDeleteDialog!: boolean;
  dividaDialog:boolean = false;
  divida!:IDivida;
  submitted!: boolean;
  requestOptions:any;
  dividaSelecionada:any;
  constructor(private dividaService: DividaService,
              private activatedRoute :ActivatedRoute,){}

  ngOnInit(){
    let params = new HttpParams();
    params = params.append('pagina', 0);
    params = params.append('quantidade',1000);
    params = params.append('ordem', "ASC");
    params = params.append('ordenarPor', "id");
    this.requestOptions = { params: params };
    let param: Observable<Params> = this.activatedRoute.params;
    this.buscarTodos();
  }

  buscarTodos(){
    this.dividaService.buscarTodos(this.requestOptions).subscribe((data:any)=>{
      this.dividas= data
    });
  }

  editar( id:number, divida:IDivida,){
    this.dividaDialog = true;
    return this.divida = divida;
  }

  delete(id: number, divida: IDivida) {
    this.dividaDeleteDialog = true;
    return this.divida = divida;
  }
  
  deletar(id: number) {
    if (id) {
      this.submitted = true;
      this.dividaService.deletar(id)
        .subscribe((response:any) => {
          this.divida = response;
          this.buscarTodos();
        });
    }
    this.dividaDeleteDialog = false;
  }

  salvar() {

    this.submitted = true;
    this.divida = this.editar(  this.divida.id, this.divida);
    if (this.divida.nome.trim()) {
      if (this.divida.id) {
        this.dividaService.atualizar(this.divida.id, this.divida)
          .subscribe(
            (response:any) => {
              this.divida = response;
            }
          )
        }
        this.dividaDialog = false;
      }
  }

  hideDialog() {
    this.dividaDialog = false;
    this.dividaDeleteDialog= false;
    this.submitted = false;
  }
}
