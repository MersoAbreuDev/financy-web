import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ICredor } from 'src/app/interfaces/credor';
import { IDivida } from 'src/app/interfaces/divida';
import { IResponsavel } from 'src/app/interfaces/responsavel';
import { CredorService } from 'src/app/services/credor/credor.service';
import { DividaService } from 'src/app/services/divida/divida.service';
import { ParcelaService } from 'src/app/services/parcela/parcela.service';
import { ResponsavelService } from 'src/app/services/responsavel/responsavel.service';

@Component({
  selector: 'app-divida',
  templateUrl: './divida.component.html',
  styleUrls: ['./divida.component.scss']
})
export class DividaComponent {
  dividaForm!: FormGroup;
  divida!: IDivida;
  responsaveis!:IResponsavel[];
  credores!:ICredor[];
  credor!:ICredor;
  responsavel!:IResponsavel;
  requestOptions:any = [];
  STATUS=[
    {status:"PAGO"},
    {status:"ABERTO"}
  ]
  constructor(private formBuilder: FormBuilder,
              private responsavelService: ResponsavelService,
              private activatedRoute: ActivatedRoute,
              private credorService: CredorService,
              private dividaService: DividaService
               ){}

  ngOnInit(){
    this. initForms();
    let params = new HttpParams();
    params = params.append('pagina', 0);
    params = params.append('quantidade',1000);
    params = params.append('ordem', "ASC");
    params = params.append('ordenarPor', "id");
    this.requestOptions = { params: params };
    let param: Observable<Params> = this.activatedRoute.params;
  }
  
  initForms(){
    this.dividaForm = this.formBuilder.group({
      nome:['',[Validators.required]],
      valor:['',[Validators.required]],
      parcela:['',[Validators.required]],
      status:['',[Validators.required]],
      idCredor:['',[Validators.required]],
      idResponsavel:['',[Validators.required]],
      dataVencimento:['',[Validators.required]],
      dataCompra:['',[Validators.required]]
    })

    this.todosCredores();
    this.todosResponsaveis();
  }

  todosCredores(){
    this.credorService.buscarTodos(this.requestOptions).subscribe(data => this.credores= data);
  }

  todosResponsaveis(){
    this.responsavelService.buscarTodos(this.requestOptions).subscribe(data => this.responsaveis= data);
  }

  getValueControl(form:FormGroup, control:string){
    return form.controls[control].value;
  }

  cadastrar(){
    let nome = this.getValueControl(this.dividaForm, 'nome')
    let valor = this.getValueControl(this.dividaForm, 'valor')
    let parcela = this.getValueControl(this.dividaForm, 'parcela')
    let status = this.getValueControl(this.dividaForm, 'status')
    let idCredor = this.getValueControl(this.dividaForm, 'idCredor')
    let idResponsavel = this.getValueControl(this.dividaForm, 'idResponsavel')
    let dataVencimento = this.getValueControl(this.dividaForm, 'dataVencimento')
    let dataCompra = this.getValueControl(this.dividaForm, 'dataCompra')
     const payload = {
        nome,
        valor,
        parcela,
        status,
        idCredor,
        idResponsavel,
        dataVencimento,
        dataCompra
      }
    
      this.dividaService.salvar(payload).subscribe((data:any)=>{
        data = payload;
      })
      this.clearForm();
  }

  clearForm(){
    this.dividaForm.reset();
  }

}
