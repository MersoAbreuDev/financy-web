import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IResponsavel } from 'src/app/interfaces/responsavel';
import { ResponsavelService } from 'src/app/services/responsavel/responsavel.service';

@Component({
  selector: 'app-responsavel',
  templateUrl: './responsavel.component.html',
  styleUrls: ['./responsavel.component.scss']
})
export class ResponsavelComponent {
  responsavel!: any;
  responsavelForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private responsavelService: ResponsavelService ){}

  ngOnInit(){
    this. initForms();
  }
  
  initForms(){
    this.responsavelForm = this.formBuilder.group({
      nome:['',[Validators.required]],
     
    })
  }
  
  getValueControl(form:FormGroup, control:string){
    return form.controls[control].value;
  }

  cadastrar(){
    let nome = this.getValueControl(this.responsavelForm, 'nome')

     const payload = {
        nome,
        
      }
      this.responsavelService.salvar(payload).subscribe((data:any)=>{
        data = payload;
      })
      this.clearForm();
  }

  clearForm(){
    this.responsavelForm.reset();
  }
}
