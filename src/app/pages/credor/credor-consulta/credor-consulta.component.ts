import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ICredor } from 'src/app/interfaces/credor';

import { CredorService } from 'src/app/services/credor/credor.service';

@Component({
  selector: 'app-credor-consulta',
  templateUrl: './credor-consulta.component.html',
  styleUrls: ['./credor-consulta.component.scss']
})
export class CredorConsultaComponent {
  credores:any =[];
  credorDeleteDialog!: boolean;
  credorDialog:boolean = false;
  credor!:ICredor;
  submitted!: boolean;
  requestOptions:any;
  categoriaSelecionada:any;
  constructor(private credorService: CredorService,
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
    this.credorService.buscarTodos(this.requestOptions).subscribe((data:any)=>{
      this.credores= data
    });
  }

  editar( id:number, credor:ICredor,){
    this.credorDialog = true;
    return this.credor = credor;
  }

  delete(id: number, credor: ICredor) {
    this.credorDeleteDialog = true;
    return this.credor = credor;
  }
  
  deletar(id: number) {
    if (id) {
      this.submitted = true;
      this.credorService.deletar(id)
        .subscribe((response:any) => {
          this.credor = response;
          this.buscarTodos();
        });
    }
    this.credorDeleteDialog = false;
  }

  salvar() {
    console.log("Teste")
    this.submitted = true;
    this.credor = this.editar(  this.credor.id, this.credor);
    if (this.credor.nome.trim()) {
      if (this.credor.id) {
        this.credorService.atualizar(this.credor.id, this.credor)
          .subscribe(
            (response:any) => {
              this.credor = response;
            }
          )
        }
        this.credorDialog = false;
      }
  }

  hideDialog() {
    this.credorDialog = false;
    this.credorDeleteDialog= false;
    this.submitted = false;
  }
}
