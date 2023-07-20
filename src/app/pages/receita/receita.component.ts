import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReceitaService } from 'src/app/services/receita/receita.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.scss']
})
export class ReceitaComponent {
  receita!: any;
  receitaForm!: FormGroup;
  tipoReceita=[
    {nome:"DIARIO"},
    {nome:"SEMANAL"},
    {nome:"MENSAL"},
    {nome:"ANUAL"}
  ]
  constructor(private formBuilder: FormBuilder,
              private receitaService: ReceitaService ){}

  ngOnInit(){
    this. initForms();
  }
  
  initForms(){
    this.receitaForm = this.formBuilder.group({
      nomeReceita:['', [ Validators.required]],
      tipoReceita:['', [Validators.required]],
      valorReceita:['', [Validators.required]],
      periodoVigente:['', [Validators.required]],
      observacao:['', [Validators.required]]  
    })
  }
  
  getValueControl(form:FormGroup, control:string){
    return form.controls[control].value;
  }

  cadastrar(){
   let nomeReceita = this.getValueControl(this.receitaForm, 'nomeReceita');
   let tipoReceita = this.getValueControl(this.receitaForm, 'tipoReceita');
   let valorReceita= this.getValueControl(this.receitaForm, 'valorReceita');
   let periodoVigente = this.getValueControl(this.receitaForm, 'periodoVigente');
   let observacao = this.getValueControl(this.receitaForm, 'observacao');

     const payload = {
      nomeReceita,
      tipoReceita,
      valorReceita,
      periodoVigente,
      observacao
      }

      this.receitaService.salvar(payload).subscribe((data:any)=>{
        data = payload;
      })
      this.clearForm();
  }

  clearForm(){
    this.receitaForm.reset();
  }
}
