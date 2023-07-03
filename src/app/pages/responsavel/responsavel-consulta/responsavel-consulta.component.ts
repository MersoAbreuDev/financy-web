import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IResponsavel } from 'src/app/interfaces/responsavel';
import { ResponsavelService } from 'src/app/services/responsavel/responsavel.service';

@Component({
  selector: 'app-responsavel-consulta',
  templateUrl: './responsavel-consulta.component.html',
  styleUrls: ['./responsavel-consulta.component.scss']
})
export class ResponsavelConsultaComponent {
  responsaveis:any =[];
  responsavelDeleteDialog!: boolean;
  responsavelDialog:boolean = false;
  responsavel!:IResponsavel;
  submitted!: boolean;
  requestOptions:any;
  categoriaSelecionada:any;
  constructor(private responsavelService: ResponsavelService,
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
    this.responsavelService.buscarTodos(this.requestOptions).subscribe((data:any)=>{
      this.responsaveis= data
    });
  }

  editar( id:number, responsavel:IResponsavel,){
    this.responsavelDialog = true;
    return this.responsavel = responsavel;
  }

  delete(id: number, responsavel: IResponsavel) {
    this.responsavelDeleteDialog = true;
    return this.responsavel = responsavel;
  }
  
  deletar(id: number) {
    if (id) {
      this.submitted = true;
      this.responsavelService.deletar(id)
        .subscribe((response:any) => {
          this.responsavel = response;
          this.buscarTodos();
        });
    }
    this.responsavelDeleteDialog = false;
  }

  salvar() {
    console.log("Teste")
    this.submitted = true;
    this.responsavel = this.editar(  this.responsavel.id, this.responsavel);
    if (this.responsavel.nome.trim()) {
      if (this.responsavel.id) {
        this.responsavelService.atualizar(this.responsavel.id, this.responsavel)
          .subscribe(
            (response:any) => {
              this.responsavel = response;
            }
          )
        }
        this.responsavelDialog = false;
      }
  }

  hideDialog() {
    this.responsavelDialog = false;
    this.responsavelDeleteDialog= false;
    this.submitted = false;
  }
}
