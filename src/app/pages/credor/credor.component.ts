import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CredorService } from 'src/app/services/credor/credor.service';

@Component({
  selector: 'app-credor',
  templateUrl: './credor.component.html',
  styleUrls: ['./credor.component.scss']
})
export class CredorComponent {
  credor!: any;
  credorForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private credorService: CredorService ){}

  ngOnInit(){
    this. initForms();
  }
  
  initForms(){
    this.credorForm = this.formBuilder.group({
      nome:['',[Validators.required]],
     
    })
  }
  
  getValueControl(form:FormGroup, control:string){
    return form.controls[control].value;
  }

  cadastrar(){
    let nome = this.getValueControl(this.credorForm, 'nome')

     const payload = {
        nome,
        
      }
      this.credorService.salvar(payload).subscribe((data:any)=>{
        data = payload;
      })
      this.clearForm();
  }

  clearForm(){
    this.credorForm.reset();
  }
}
