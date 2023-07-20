import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IDivida } from 'src/app/interfaces/divida';
import { IParcela } from 'src/app/interfaces/parcela';
import { DividaService } from 'src/app/services/divida/divida.service';
import { ParcelaService } from 'src/app/services/parcela/parcela.service';

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
  parcelas:any=[];
  parcela!:IParcela;
  parcelaDialog:boolean = false;
  codigo:any;
  constructor(private dividaService: DividaService,
              private activatedRoute :ActivatedRoute,
              private parcelaService : ParcelaService){}

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

  imprimirDivida(id:any, data:any){
    this.dividaService.imprimirRelatorio(id, data).subscribe((data:any)=>{
      this.parcelas= data 
    }); 
  }


  visualizarParcelas(id:any){
    this.parcelaService.buscarParcelaPorIdDivida(id).subscribe((data:any)=>{
      this.parcelas= data 
    });    
  }


  editar( id:number, divida:IDivida,){
    this.dividaDialog = true;
    return this.divida = divida;
  }

  pagarParcela(id:any){
    this.parcelaService.pagarParcelaPorid(id).subscribe(data=>console.log());
  }

  editarParcela( id:number, parcela:IParcela,){
    this.visualizarParcelas(id);
    this.parcelaDialog = true;
    return this.parcela = parcela;
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
    this.parcelaDialog = false;
    this.dividaDeleteDialog= false;
    this.submitted = false;
  }
}
