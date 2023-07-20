import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUsuario, Role } from 'src/app/interfaces/usuario';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  usuario!: any;
  usuarioForm!: FormGroup;
  role=[
    {nome:"ADMIN"},
    {nome:"USER"}
  ]
  constructor(private formBuilder: FormBuilder,
              private usuarioService: LoginService ){}

  ngOnInit(){
    this. initForms();
  }
  
  initForms(){
    this.usuarioForm = this.formBuilder.group({
      email:['',[Validators.required]],
      senha:['', [ Validators.required]],
      role:['', [Validators.required]]   
    })
  }
  
  getValueControl(form:FormGroup, control:string){
    return form.controls[control].value;
  }

  cadastrar(){
    let email = this.getValueControl(this.usuarioForm, 'email');
    let senha = this.getValueControl(this.usuarioForm, 'senha');
    let role = this.getValueControl(this.usuarioForm, 'role');


     const payload = {
          email,
          senha,
          role
      }
      this.usuarioService.register(payload).subscribe((data:any)=>{
        data = payload;
      })
      this.clearForm();
  }

  clearForm(){
    this.usuarioForm.reset();
  }
}
